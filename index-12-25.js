// December 25, 2023 Daily Katas

// KATA 1 7kyu
const capitalsFirst= str => {
  return (str.split(' ').filter(e => /[A-Z]/.test(e[0])).join(' ')+' '+str.split(' ').filter(e => /[a-z]/.test(e[0])).join(' ')).trim();
}
console.log(capitalsFirst('hey You, Sort me Already!'));

// KATA 2 7kyu
const tea42 = input => input.toString().replace(/2/g, 't');
console.log(tea42('2u2u'));

// KATA 3 7kyu
function highestValue(a, b) {
  // let aValue = a.split('').reduce((ttl, char) => ttl + char.charCodeAt(0), 0)
  // let bValue = b.split('').reduce((ttl, char) => ttl + char.charCodeAt(0), 0)
  // return aValue > bValue ? aValue : bValue;
  return [...a].reduce((c, d) => c + d.charCodeAt(), 0) >= [...b].reduce((c, d) => c + d.charCodeAt(), 0) ? a : b;
}
console.log(highestValue("ABcd", "0123"));
