const fibonacci = function(n) {
  let _n = parseInt(n);
  if(_n < 0) return 'ERROR';
  return _n <= 1 ? _n : fibonacci(_n - 1) + fibonacci(_n - 2);
};

console.log(fibonacci('-1'));

// Do not edit below this line
module.exports = fibonacci;
