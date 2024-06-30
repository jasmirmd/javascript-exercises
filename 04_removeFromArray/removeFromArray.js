const removeFromArray = function(arr, ...moreArgs) {
  const result = [];
  
  arr.map(i => !moreArgs.includes(i) ? result.push(i) : null);

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
