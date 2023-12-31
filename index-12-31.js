// December 31, 2023 Daily Katas

// KATA 1 7kyu
const adjacentElementsProduct = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length -1; i++) {
    newArr.push(arr[i] * arr[i+1]);
  }
  return Math.max(...newArr);
}
console.log(adjacentElementsProduct([5,8]));
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]));

// KATA 2 7kyu
const partlist = arr => arr.map((v, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1);
console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]));

// KATA 3 7kyu
const lastSurvivor = (str, arr) => {
  let letters = str.split('');
  for (let i = 0; i < arr.length; i++) {
    letters.splice(arr[i], 1);
  }
  return letters.join('');
}
console.log(lastSurvivor('abc', [1, 1]));