const sumAll = function(n1, n2) {
  const arr = [];
  for(let i = n1; i <= n2; i++) arr.push(i);
  const result = arr.reduce((a, b) => a + b);

  if(n1 > 0 && n2 > 0 && typeof(n1) === 'number' && typeof(n2) === 'number') {
    return result;
  } else {
    return "ERROR";
  }
};

console.log(sumAll(1, 3));

// Do not edit below this line
module.exports = sumAll;
