const palindromes = function(str) {
  const _str0 = str.slice().replace(/\W/gi, '').split('').reverse().join('');
  const _str1 = str.slice().replace(/\W/gi, '');

  return _str0.toLowerCase() === _str1.toLowerCase();
}

console.log(palindromes('racecar'));

// Do not edit below this line
module.exports = palindromes;
