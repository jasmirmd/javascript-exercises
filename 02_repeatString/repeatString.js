const repeatString = function(str, n) {
  let _str = str;
  let result = '';

  for(let i = 0; i < n; i++) {
    result += _str;
  }

  return _str ? result : "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
