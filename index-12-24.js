// December 24, 2023 Daily Katas
// KATA 1 7kyu
const getStrings = city => {
  let obj = {};
  let arr = [];
  for (let i = 0; i < city.length; i++) {
    const char = city[i].toLowerCase();
    if (/[a-z]/.test(char)) {
      obj[char] = (obj[char] || '') + '*';
    }
  }
  Object.entries(obj).forEach(([key, value]) => {
    arr.push(`${key}:${value}`);
  })
  return arr.join(',');
}
console.log(getStrings('Chicago'));

// KATA 2 7kyu
const spongeMeme = sentence => {
  return sentence
    .split('')
    .map((char, i) => i % 2 ? char.toLowerCase() : char.toUpperCase())
    .join('');
  }
console.log(spongeMeme("stop Making spongebob Meme's!"));

// KATA 3 7kyu
const capMe = names => names.map(name => `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`);
console.log(capMe(['jo', 'nelson', 'JURIE']));