// ── App: Rendering, Pan/Zoom, Panel, Search ──

const canvas = document.getElementById('canvas');
const svg = document.getElementById('connectors');
const wrap = document.getElementById('canvas-wrap');

let scale = 1, panX = 0, panY = 0;
let selectedId = null;
let allCardEls = {};

let positions, genY;

function renderTree() {
  const layout = buildLayout();
  positions = layout.positions;
  genY = layout.genY;

  const totalPeople = familyData.people.length;
  const totalGens = Object.keys(genY).length;
  const statsEl = document.getElementById('header-stats');
  if (statsEl) {
    statsEl.innerHTML = `
      <span class="stat-item">Members: <b>${totalPeople}</b></span>
      <span class="stat-item">Generations: <b>${totalGens}</b></span>
    `;
  }

  drawConnectors();
  drawCards();
  fitToScreen();
}

function drawConnectors() {
  const lines = [];

  // Couple connectors (gold horizontal line between spouses)
  for (const couple of familyData.couples) {
    const p1 = positions[couple.person1];
    const p2 = positions[couple.person2];
    if (!p1 || !p2) continue;
    lines.push(`<line x1="${p1.x + CARD_W}" y1="${p1.y + CARD_H / 2}" x2="${p2.x}" y2="${p2.y + CARD_H / 2}" stroke="var(--gold)" stroke-width="2"/>`);
  }

  // Parent → child connectors
  for (const fam of familyData.families) {
    const couple = getCouple(fam.parentCouple);
    if (!couple) continue;

    const p1pos = positions[couple.person1];
    const p2pos = positions[couple.person2];
    if (!p1pos && !p2pos) continue;

    // Midpoint of couple connector (or single parent card center)
    let midX, midY;
    if (p1pos && p2pos) {
      midX = p1pos.x + CARD_W + (p2pos.x - p1pos.x - CARD_W) / 2;
      midY = p1pos.y + CARD_H / 2;
    } else {
      const parentPos = p1pos || p2pos;
      midX = parentPos.x + CARD_W / 2;
      midY = parentPos.y + CARD_H / 2;
    }

    const sortedChildren = [...fam.children].sort((a, b) => new Date(getPerson(a)?.dob) - new Date(getPerson(b)?.dob));
    if (sortedChildren.length === 0) continue;

    const parentY = (p1pos || p2pos).y;
    const dropY = parentY + CARD_H + V_GAP / 2;

    // Vertical drop from parent midpoint
    lines.push(`<line x1="${midX}" y1="${midY}" x2="${midX}" y2="${dropY}" stroke="var(--connector)" stroke-width="1.5" stroke-dasharray="5,3"/>`);

    // Child card centers
    const childPositions = sortedChildren.map(id => positions[id]).filter(Boolean);
    if (childPositions.length === 0) continue;
    const childXs = childPositions.map(p => p.x + CARD_W / 2);

    const leftX = Math.min(...childXs);
    const rightX = Math.max(...childXs);

    // Horizontal bar — always draw and extend to include midX
    // This bridges single-child misalignment (creates L-shaped connector)
    lines.push(`<line x1="${Math.min(midX, leftX)}" y1="${dropY}" x2="${Math.max(midX, rightX)}" y2="${dropY}" stroke="var(--connector)" stroke-width="1.5" stroke-dasharray="5,3"/>`);

    // Vertical drops to each child card
    for (let i = 0; i < sortedChildren.length; i++) {
      const cpos = positions[sortedChildren[i]];
      if (!cpos) continue;
      const cx = childXs[i];
      lines.push(`<line x1="${cx}" y1="${dropY}" x2="${cx}" y2="${cpos.y}" stroke="var(--connector)" stroke-width="1.5" stroke-dasharray="5,3"/>`);
    }
  }

  svg.innerHTML = lines.join('');
}

function drawCards() {
  canvas.querySelectorAll('.person-card, .gen-label').forEach(e => e.remove());
  allCardEls = {};
  
  // Draw Generation Labels
  Object.entries(genY).forEach(([gen, y]) => {
    const lbl = document.createElement('div');
    lbl.className = 'gen-label';
    lbl.style.top = (y + CARD_H / 2) + 'px';
    lbl.textContent = `Gen ${Number(gen) + 1}`;
    canvas.appendChild(lbl);
  });

  for (const person of familyData.people) {
    const pos = positions[person.id];
    if (!pos) continue;

    const card = document.createElement('div');
    card.className = `person-card ${person.gender}`;
    card.style.left = pos.x + 'px';
    card.style.top = pos.y + 'px';
    card.dataset.id = person.id;

    const fullName = person.name;
    card.innerHTML = `
      <div class="card-avatar">${getInitials(fullName)}</div>
      <div class="card-name">${fullName}</div>
      <!-- <div class="card-age">${getAge(person.dob)}y</div> -->
    `;

    card.addEventListener('click', (e) => {
      if (hasDragged) return;
      openPanel(person.id);
      centerOn(person.id);
    });
    canvas.appendChild(card);
    allCardEls[person.id] = card;
  }
}

// ── Pan & Zoom ──

let isPanning = false, startX, startY, startPanX, startPanY, hasDragged = false;

// ── Inertia state ──
let velX = 0, velY = 0;
let lastMoveX = 0, lastMoveY = 0, lastMoveTime = 0;
let inertiaFrame = null;
const FRICTION = 0.92;      // multiplied each frame — higher = slides longer
const MIN_VEL = 0.4;        // px/frame below which inertia stops

function stopInertia() {
  if (inertiaFrame) { cancelAnimationFrame(inertiaFrame); inertiaFrame = null; }
  if (animationFrame) { cancelAnimationFrame(animationFrame); animationFrame = null; }
  velX = 0; velY = 0;
}

function startInertia() {
  if (inertiaFrame) cancelAnimationFrame(inertiaFrame);
  function step() {
    velX *= FRICTION;
    velY *= FRICTION;
    if (Math.abs(velX) < MIN_VEL && Math.abs(velY) < MIN_VEL) { inertiaFrame = null; return; }
    panX += velX;
    panY += velY;
    applyTransform();
    inertiaFrame = requestAnimationFrame(step);
  }
  inertiaFrame = requestAnimationFrame(step);
}

function applyTransform() {
  canvas.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
  updateScrollIndicator();
}

function fitToScreen() {
  stopInertia();
  let maxX = 0, maxY = 0;
  for (const pos of Object.values(positions)) {
    maxX = Math.max(maxX, pos.x + CARD_W);
    maxY = Math.max(maxY, pos.y + CARD_H);
  }
  const ww = wrap.clientWidth, wh = wrap.clientHeight;
  const targetScale = Math.min((ww - 80) / maxX, (wh - 80) / maxY, 1);
  const targetX = (ww - maxX * targetScale) / 2;
  const targetY = 40;
  
  animateTo(targetX, targetY, targetScale);
}

document.getElementById('zoom-in').addEventListener('click', () => { stopInertia(); scale = Math.min(scale * 1.2, 3); applyTransform(); });
document.getElementById('zoom-out').addEventListener('click', () => { stopInertia(); scale = Math.max(scale / 1.2, 0.2); applyTransform(); });
document.getElementById('zoom-reset').addEventListener('click', () => {
  stopInertia();
  const roots = familyData.people.filter(p => !familyData.families.some(f => f.children.includes(p.id)));
  if (roots.length > 0) {
    centerOn(roots[0].id, 0.8);
  } else {
    fitToScreen();
  }
});

function centerOn(id, customScale = null) {
  stopInertia();
  const pos = positions[id];
  if (!pos) return;
  const ww = wrap.clientWidth;
  const wh = wrap.clientHeight;
  const targetScale = customScale !== null ? customScale : scale;
  const targetX = ww / 2 - (pos.x + CARD_W / 2) * targetScale;
  const targetY = wh / 2 - (pos.y + CARD_H / 2) * targetScale;
  
  animateTo(targetX, targetY, targetScale);
}

let animationFrame = null;
function animateTo(targetX, targetY, targetScale) {
  if (animationFrame) cancelAnimationFrame(animationFrame);
  
  const startX = panX, startY = panY, startScale = scale;
  const duration = 500;
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic

    panX = startX + (targetX - startX) * ease;
    panY = startY + (targetY - startY) * ease;
    scale = startScale + (targetScale - startScale) * ease;
    
    applyTransform();
    if (progress < 1) {
      animationFrame = requestAnimationFrame(step);
    } else {
      animationFrame = null;
    }
  }
  animationFrame = requestAnimationFrame(step);
}

function updateScrollIndicator() {
  const indicator = document.getElementById('scroll-indicator');
  if (!indicator) return;
  
  let minX = Infinity, maxX = -Infinity;
  for (const pos of Object.values(positions)) {
    minX = Math.min(minX, pos.x);
    maxX = Math.max(maxX, pos.x + CARD_W);
  }
  
  const treeWidth = maxX - minX;
  const ww = wrap.clientWidth;
  const visibleWidth = ww / scale;
  
  // Percent of the tree that is visible
  const ratio = Math.min(visibleWidth / treeWidth, 1);
  const bar = indicator.querySelector('.indicator-bar');
  bar.style.width = (ratio * 100) + '%';
  
  // Position of the bar
  const currentLeft = -panX / scale;
  const scrollRatio = (currentLeft - minX) / (treeWidth - visibleWidth);
  const clampedScrollRatio = Math.max(0, Math.min(1, scrollRatio));
  bar.style.left = (clampedScrollRatio * (1 - ratio) * 100) + '%';
}

// ── Mouse pan ──
wrap.addEventListener('mousedown', e => {
  stopInertia();
  isPanning = true;
  hasDragged = false;
  startX = e.clientX; startY = e.clientY;
  startPanX = panX; startPanY = panY;
  lastMoveX = e.clientX; lastMoveY = e.clientY; lastMoveTime = performance.now();
  wrap.classList.add('grabbing');
});
window.addEventListener('mousemove', e => {
  if (!isPanning) return;
  if (Math.hypot(e.clientX - startX, e.clientY - startY) > 5) hasDragged = true;
  const now = performance.now();
  const dt = now - lastMoveTime || 1;
  velX = (e.clientX - lastMoveX) / dt * 16;
  velY = (e.clientY - lastMoveY) / dt * 16;
  lastMoveX = e.clientX; lastMoveY = e.clientY; lastMoveTime = now;
  panX = startPanX + (e.clientX - startX);
  panY = startPanY + (e.clientY - startY);
  applyTransform();
});
window.addEventListener('mouseup', () => {
  if (isPanning) startInertia();
  isPanning = false;
  wrap.classList.remove('grabbing');
  setTimeout(() => hasDragged = false, 50);
});

// ── Touch pan & pinch zoom ──
let lastTouchDist = null, lastPinchMidX = 0, lastPinchMidY = 0;
let lastTapTime = 0; // for double-tap detection

wrap.addEventListener('touchstart', e => {
  stopInertia();
  if (e.touches.length === 1) {
    // Double-tap to fit screen
    const now = Date.now();
    if (now - lastTapTime < 300) {
      e.preventDefault();
      fitToScreen();
      lastTapTime = 0;
      return;
    }
    lastTapTime = now;

    isPanning = true;
    hasDragged = false;
    startX = e.touches[0].clientX; startY = e.touches[0].clientY;
    startPanX = panX; startPanY = panY;
    lastMoveX = e.touches[0].clientX; lastMoveY = e.touches[0].clientY; lastMoveTime = performance.now();
  }
  if (e.touches.length === 2) {
    isPanning = false;
    hasDragged = true;
    lastTouchDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
    const rect = wrap.getBoundingClientRect();
    lastPinchMidX = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
    lastPinchMidY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;
  }
}, { passive: false });

wrap.addEventListener('touchmove', e => {
  if (e.cancelable) e.preventDefault();
  if (e.touches.length === 1 && isPanning) {
    if (Math.hypot(e.touches[0].clientX - startX, e.touches[0].clientY - startY) > 5) hasDragged = true;
    const now = performance.now();
    const dt = now - lastMoveTime || 1;
    velX = (e.touches[0].clientX - lastMoveX) / dt * 16;
    velY = (e.touches[0].clientY - lastMoveY) / dt * 16;
    lastMoveX = e.touches[0].clientX; lastMoveY = e.touches[0].clientY; lastMoveTime = now;
    panX = startPanX + (e.touches[0].clientX - startX);
    panY = startPanY + (e.touches[0].clientY - startY);
    applyTransform();
  }
  if (e.touches.length === 2 && lastTouchDist > 5) {
    const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
    const ratio = dist / lastTouchDist;
    const newScale = Math.min(Math.max(scale * ratio, 0.2), 3);
    
    const rect = wrap.getBoundingClientRect();
    const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
    const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;

    // Pan based on both the zoom and the movement of the pinch midpoint
    panX = midX - (lastPinchMidX - panX) * (newScale / scale);
    panY = midY - (lastPinchMidY - panY) * (newScale / scale);
    
    scale = newScale;
    lastTouchDist = dist;
    lastPinchMidX = midX;
    lastPinchMidY = midY;
    applyTransform();
  }
}, { passive: false });

wrap.addEventListener('touchend', e => {
  if (isPanning) startInertia();
  isPanning = false;
  lastTouchDist = null;
  setTimeout(() => hasDragged = false, 50);
});

// Wheel zoom (centered on cursor)
wrap.addEventListener('wheel', e => {
  e.preventDefault();
  const delta = e.deltaY > 0 ? 0.9 : 1.1;
  const rect = wrap.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  const newScale = Math.min(Math.max(scale * delta, 0.2), 3);
  panX = mouseX - (mouseX - panX) * (newScale / scale);
  panY = mouseY - (mouseY - panY) * (newScale / scale);
  scale = newScale;
  applyTransform();
}, { passive: false });

// ── Side Panel ──

function openPanel(id) {
  selectedId = id;
  const person = getPerson(id);
  if (!person) return;

  // Highlight selected + relations, dim rest
  Object.values(allCardEls).forEach(el => el.classList.replace ? el.classList.add('dimmed') : null);
  Object.values(allCardEls).forEach(el => el.classList.add('dimmed'));
  allCardEls[id]?.classList.remove('dimmed');
  allCardEls[id]?.classList.add('highlighted');

  const spouse = getSpouse(id);
  if (spouse) allCardEls[spouse.id]?.classList.remove('dimmed');
  getParents(id).forEach(p => allCardEls[p.id]?.classList.remove('dimmed'));
  getChildren(id).forEach(c => allCardEls[c.id]?.classList.remove('dimmed'));
  getSiblings(id).forEach(s => allCardEls[s.id]?.classList.remove('dimmed'));

  // Fill panel header
  const avatar = document.getElementById('panel-avatar');
  avatar.textContent = getInitials(person.name);
  avatar.className = `panel-avatar ${person.gender}`;
  document.getElementById('panel-name').textContent = person.name;
  const gTag = document.getElementById('panel-gender-tag');
  gTag.textContent = person.gender === 'male' ? '♂ Male' : '♀ Female';
  gTag.className = `panel-gender-tag ${person.gender}`;

  // Fill panel body
  const body = document.getElementById('panel-body');
  body.innerHTML = '';

  const details = document.createElement('div');
  details.innerHTML = `
    <div class="panel-section-title">Details</div>
    <div class="panel-row"><span class="panel-row-label">Date of Birth</span><span class="panel-row-value">${formatDate(person.dob)}</span></div>
    <!-- <div class="panel-row"><span class="panel-row-label">Age</span><span class="panel-row-value">${getAge(person.dob)} years</span></div> -->
  `;
  body.appendChild(details);

  const addSection = (title, people) => {
    if (!people.length) return;
    const div = document.createElement('div');
    div.innerHTML = `<div class="panel-section-title" style="margin-top:8px">${title}</div>`;
    people.forEach(p => div.appendChild(makeChip(p)));
    body.appendChild(div);
  };

  if (spouse) addSection('Spouse', [spouse]);
  addSection('Parents', getParents(id));
  addSection('Siblings', [...getSiblings(id)].sort((a, b) => new Date(a.dob) - new Date(b.dob)));
  addSection('Children', [...getChildren(id)].sort((a, b) => new Date(a.dob) - new Date(b.dob)));

  document.getElementById('side-panel').classList.add('open');
  document.getElementById('overlay').classList.add('show');
}

function makeChip(person) {
  const chip = document.createElement('span');
  chip.className = `panel-relation-chip ${person.gender}`;
  chip.innerHTML = `<span class="chip-dot"></span>${person.name} <!-- <span style="opacity:0.6;font-size:0.72rem">${getAge(person.dob)}y</span> -->`;
  chip.addEventListener('click', () => openPanel(person.id));
  return chip;
}

function closePanel() {
  document.getElementById('side-panel').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
  selectedId = null;
  Object.values(allCardEls).forEach(el => el.classList.remove('highlighted', 'dimmed'));
}

document.getElementById('panel-close').addEventListener('click', closePanel);
document.getElementById('overlay').addEventListener('click', closePanel);

// ── Search ──

document.getElementById('search').addEventListener('input', function () {
  const q = this.value.toLowerCase().trim();
  if (!q) {
    Object.values(allCardEls).forEach(el => el.classList.remove('highlighted', 'dimmed'));
    return;
  }
  let firstMatchId = null;
  Object.entries(allCardEls).forEach(([id, el]) => {
    const person = getPerson(Number(id));
    if (person.name.toLowerCase().includes(q)) {
      el.classList.add('highlighted');
      el.classList.remove('dimmed');
      if (!firstMatchId) firstMatchId = Number(id);
    } else {
      el.classList.remove('highlighted');
      el.classList.add('dimmed');
    }
  });

  if (firstMatchId) {
    centerOn(firstMatchId, 0.9);
  }
});

// ── Init ──
renderTree();
window.addEventListener('resize', fitToScreen);
