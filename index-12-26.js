// December 26, 2023 Daily Katas
// KATA 1 7kyu
const myParseInt = str => /^\s*\d+\s*$/.test(str.trim()) ? +str : NaN;
console.log(myParseInt('1'));
console.log(myParseInt('5 friends'));
console.log(myParseInt('16.5'));
console.log(myParseInt('08'));
console.log(myParseInt('      1     '));

// KATA 2 7kyu
const solution = obj => {
  return Object.entries(obj)
    .map(([key, value]) => `${key} = ${value}`)
    .join(',');
}
console.log(solution({a: 1, b: '2'}));

// KATA 3 7kyu
const binaryToString = str =>{
  let arr = str.split('0b');
  return arr.map((val,i) => (i > 0 ? String.fromCharCode(parseInt(val, 2)) : '')).join('');
}
console.log(binaryToString('0b10000110b11000010b1110100'));