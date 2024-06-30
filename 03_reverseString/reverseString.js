const reverseString = function(str) {
  let splitStr = str.split('');
  let arr = [];

  splitStr.map(i => arr.unshift(i));

  return arr.join('');
};

// Do not edit below this line
module.exports = reverseString;
