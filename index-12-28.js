// // December 28, 2023 Daily Katas
// // KATA 1 7kyu


// // KATA 2 7kyu
// // function aliasGen() {
// //   let fName = firstName[arguments[0][0].toUpperCase()]
// //   let sName = surname[arguments[1][0].toUpperCase()]
// //   return fName && sName ? `${fName} ${sName}` : `Your name must start with a letter from A - Z.`  
// // }
// // console.log(aliasGen("Mike", "Millington"))

// // KATA 3 7kyu
// const mergeArrays = (arr1,arr2) => {
//   let merge = arr1.concat(arr2).sort((a,b) => a - b);
//   return Array.from (new Set(merge));
// }
// console.log(mergeArrays([1,2,3,4], [5,6,7,8]));
// console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));