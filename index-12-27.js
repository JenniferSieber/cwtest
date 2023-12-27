// December 27, 2023 Daily Katas
// KATA 1 7kyu
const readOut = acrostic => acrostic.map(word => word[0]).join('');
console.log(readOut(['Jolly', 'Amazing', 'Courteous', 'Keen']));

// KATA 2 7kyu
const charToAscii = string => {
  let str = string.replace(/[^a-z]/gi, '');
  return str ? str.split('').reduce((a, b) => (a[b] = b.charCodeAt(0), a), {}): null;
}
console.log(charToAscii(''));
console.log(charToAscii('a'));
console.log(charToAscii('aABaa'));

// KATA 3 7kyu
const owlPic = text =>
  (val => (val.concat(`''0v0''`, val.slice(0).reverse())).join(``))
  (text.toUpperCase().match(/[8WTYUIOAHXVM]/g));
console.log(owlPic('kuawd6r8q27y87t93r76352475437'));
console.log(owlPic('t6ggggggggWw'));
