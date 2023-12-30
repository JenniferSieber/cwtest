// December 30, 2023 Daily Katas

// KATA 1 7kyu
const stairsIn20 = a => {
  return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
}
console.log(stairsIn20([6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
  7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 
  5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 
  6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]));

// KATA 2 7kyu
const eachCons = (arr, num) => arr.map((el, i)=> arr.slice(i, i + num)).filter(x => x.length === num);
console.log(eachCons([1,2,3,4], 2));

// KATA 3 7kyu
const isSortedAndHow = arr => {
  let ascend = arr.filter((e, i, a) => e > a[i + 1]).length == 0
  let descend = arr.filter((e, i, a) => e < a[i + 1]).length == 0
  return ascend ? 'yes, ascending' : descend ? 'yes, descending' : 'no';
}
console.log(isSortedAndHow([1,2,3]));
console.log(isSortedAndHow([3,2,1]));
console.log(isSortedAndHow([2,1,7]));