const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(array) {
	return array.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function(array) {
  return array.reduce((prev, curr) => prev * curr);
};

const power = function(n1, n2) {
	return n1 ** n2;
};

const factorial = function(n1) {
  return n1 === 0 ? 1 :
  Array.from({length: n1 + 1})
  .map((_, i) => i)
  .filter(x => x > 0)
  .reduce((prev, curr) => prev * curr);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
