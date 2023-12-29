// December 29, 2023 Daily Katas

// KATA 1 7kyu
const arr2bin = arr => arr.filter(e => typeof e == 'number').reduce((ttl, cv) => ttl + cv, 0).toString(2);
console.log(arr2bin([1,2]));
console.log(arr2bin([1,2, 'a']));
console.log(arr2bin([15]));

// KATA 2 7kyu
const all = (arr, fun) => arr.every(fun);
console.log([1,2,3,4,5], 'greater_than_9');

// KATA 3 7kyu
Array.prototype.filter=function(fn){
  return this.reduce((s,a)=>fn(a)?(s.push(a),s):s,[]);
}