'use strict';
/**
 * Find the nth Fibonacci number
**/

var nthFibonacci = function (n) {
  if (n === 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

console.log(0 === nthFibonacci(0));
//-> 0
console.log(1 === nthFibonacci(1));
//-> 1
console.log(1 === nthFibonacci(2));
//-> 1
console.log(2 === nthFibonacci(3));
//-> 2
console.log(3 === nthFibonacci(4));
//-> 3

module.exports = {
nthFibonacci: nthFibonacci,
};
