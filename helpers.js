// ── Data Helpers ──
// All functions that query/transform familyData

function getAge(dob) {
  const birth = new Date(dob);
  const ref = new Date();
  let age = ref.getFullYear() - birth.getFullYear();
  const m = ref.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && ref.getDate() < birth.getDate())) age--;
  return age;
}

function getInitials(name) {
  return name.split(' ').slice(0, 2).map(n => n[0]).join('');
}

function formatDate(dob) {
  return new Date(dob).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

function getPerson(id) {
  return familyData.people.find(p => p.id === id);
}

function getCouple(id) {
  return familyData.couples.find(c => c.id === id);
}

function getSpouse(personId) {
  const c = familyData.couples.find(c => c.person1 === personId || c.person2 === personId);
  if (!c) return null;
  return c.person1 === personId ? getPerson(c.person2) : getPerson(c.person1);
}

function getParents(personId) {
  for (const fam of familyData.families) {
    if (fam.children.includes(personId)) {
      const couple = getCouple(fam.parentCouple);
      return [getPerson(couple.person1), getPerson(couple.person2)].filter(Boolean);
    }
  }
  return [];
}

function getSiblings(personId) {
  for (const fam of familyData.families) {
    if (fam.children.includes(personId)) {
      return fam.children.filter(id => id !== personId).map(getPerson).filter(Boolean);
    }
  }
  return [];
}

function getChildren(personId) {
  const result = [];
  for (const fam of familyData.families) {
    const couple = getCouple(fam.parentCouple);
    if (couple && (couple.person1 === personId || couple.person2 === personId)) {
      result.push(...fam.children.map(getPerson).filter(Boolean));
    }
  }
  return result;
}
