// ── Layout Engine ──
// Computes (x, y) positions for every person card using a
// bottom-up subtree sizing + top-down centering algorithm.

const CARD_W = 180, CARD_H = 110, H_GAP = 36, V_GAP = 90, COUPLE_GAP = 12;
const COUPLE_W = CARD_W * 2 + COUPLE_GAP;

function buildLayout() {
  const positions = {};

  // ── Step 1: Assign generations ──
  const genMap = {};

  function assignGen(id, gen) {
    if (genMap[id] !== undefined) return;
    genMap[id] = gen;
    const spouse = getSpouse(id);
    if (spouse) assignGen(spouse.id, gen);
    const fams = familyData.families.filter(f => {
      const c = getCouple(f.parentCouple);
      return c && (c.person1 === id || c.person2 === id);
    });
    for (const fam of fams) {
      for (const childId of fam.children) assignGen(childId, gen + 1);
    }
    for (const parent of getParents(id)) assignGen(parent.id, gen - 1);
  }

  const allChildIds = new Set(familyData.families.flatMap(f => f.children));
  const roots = familyData.people.filter(p => !allChildIds.has(p.id)).map(p => p.id);
  for (const r of roots) assignGen(r, 0);
  for (const p of familyData.people) {
    if (genMap[p.id] === undefined) assignGen(p.id, 0);
  }

  // Normalize min gen to 0
  const minGen = Math.min(...Object.values(genMap));
  for (const id in genMap) genMap[id] -= minGen;

  // ── Step 2: Build generation groups ──
  const gens = {};
  for (const [id, gen] of Object.entries(genMap)) {
    if (!gens[gen]) gens[gen] = [];
    gens[gen].push(Number(id));
  }
  const genKeys = Object.keys(gens).map(Number).sort((a, b) => a - b);

  // ── Step 3: Build unit list per generation ──
  // A unit is a couple (two cards) or a single (one card), with its children list.
  const unitsByGen = {};
  for (const gen of genKeys) {
    const ids = gens[gen];
    const placed = new Set();
    const units = [];

    for (const couple of familyData.couples) {
      const { person1: p1, person2: p2 } = couple;
      const p2InGen = p2 !== null && ids.includes(p2);
      if (ids.includes(p1) && !placed.has(p1)) {
        if (p2InGen && !placed.has(p2)) {
          const fam = familyData.families.find(f => f.parentCouple === couple.id);
          units.push({ type: 'couple', ids: [p1, p2], coupleId: couple.id, children: fam ? [...fam.children] : [] });
          placed.add(p1); placed.add(p2);
        } else if (!p2InGen) {
          const fam = familyData.families.find(f => f.parentCouple === couple.id);
          units.push({ type: 'single', ids: [p1], coupleId: couple.id, children: fam ? [...fam.children] : [] });
          placed.add(p1);
        }
      }
    }
    // Remaining unplaced people (no couple)
    for (const id of ids) {
      if (!placed.has(id)) {
        units.push({ type: 'single', ids: [id], coupleId: null, children: [] });
        placed.add(id);
      }
    }
    unitsByGen[gen] = units;
  }

  // ── Step 4: Bottom-up subtree width calculation ──
  function unitW(unit) { return unit.type === 'couple' ? COUPLE_W : CARD_W; }

  const subtreeWidths = {};

  function getUnitKey(unit) {
    return unit.coupleId ? unit.coupleId : `s_${unit.ids[0]}`;
  }

  function computeSubtreeWidth(unit) {
    const key = getUnitKey(unit);
    if (subtreeWidths[key] !== undefined) return subtreeWidths[key];

    const childUnits = (unit.children || []).map(childId => {
      const cg = genMap[childId];
      if (cg === undefined || !unitsByGen[cg]) return null;
      return unitsByGen[cg].find(u => u.ids.includes(childId));
    }).filter((u, i, a) => u && a.indexOf(u) === i);

    if (childUnits.length === 0) {
      subtreeWidths[key] = unitW(unit);
      return unitW(unit);
    }
    const childrenTotalW = childUnits.reduce((s, cu) => s + computeSubtreeWidth(cu), 0)
      + H_GAP * (childUnits.length - 1);
    subtreeWidths[key] = Math.max(unitW(unit), childrenTotalW);
    return subtreeWidths[key];
  }

  // Compute deepest-first so children are ready before parents
  const allGenKeys = [...genKeys].sort((a, b) => b - a);
  for (const gen of allGenKeys) {
    for (const unit of unitsByGen[gen]) computeSubtreeWidth(unit);
  }

  // ── Step 5: Top-down x assignment ──
  const unitXMap = {};

  function assignX(unit, leftEdge) {
    const key = getUnitKey(unit);
    if (unitXMap[key] !== undefined) return;
    const sw = subtreeWidths[key] || unitW(unit);
    unitXMap[key] = leftEdge + (sw - unitW(unit)) / 2;

    const childUnits = (unit.children || []).map(childId => {
      const cg = genMap[childId];
      if (cg === undefined || !unitsByGen[cg]) return null;
      return unitsByGen[cg].find(u => u.ids.includes(childId));
    }).filter((u, i, a) => u && a.indexOf(u) === i);

    if (childUnits.length === 0) return;

    const childrenTotalW = childUnits.reduce((s, cu) => {
      return s + (subtreeWidths[getUnitKey(cu)] || unitW(cu));
    }, 0) + H_GAP * (childUnits.length - 1);

    // Center children within parent's slot
    let cx = leftEdge + (sw - childrenTotalW) / 2;
    for (const cu of childUnits) {
      const csw = subtreeWidths[getUnitKey(cu)] || unitW(cu);
      assignX(cu, cx);
      cx += csw + H_GAP;
    }
  }

  const rootUnits = unitsByGen[0] || [];
  let rootX = 0;
  for (const unit of rootUnits) {
    assignX(unit, rootX);
    rootX += (subtreeWidths[getUnitKey(unit)] || unitW(unit)) + H_GAP;
  }

  // Fallback: place any orphaned units not reachable from roots
  for (const gen of genKeys) {
    for (const unit of unitsByGen[gen]) {
      const key = getUnitKey(unit);
      if (unitXMap[key] === undefined) {
        unitXMap[key] = rootX;
        rootX += (subtreeWidths[key] || unitW(unit)) + H_GAP;
      }
    }
  }

  // ── Step 6: Assign final pixel positions ──
  const Y_START = 40;
  const genY = {};
  genKeys.forEach((g, i) => { genY[g] = Y_START + i * (CARD_H + V_GAP); });

  for (const gen of genKeys) {
    for (const unit of unitsByGen[gen]) {
      const key = getUnitKey(unit);
      const x0 = unitXMap[key];
      if (x0 === undefined) continue;
      const y = genY[gen];
      if (unit.type === 'couple') {
        positions[unit.ids[0]] = { x: x0, y };
        positions[unit.ids[1]] = { x: x0 + CARD_W + COUPLE_GAP, y };
      } else {
        positions[unit.ids[0]] = { x: x0, y };
      }
    }
  }

  return { positions, genY, genMap };
}
