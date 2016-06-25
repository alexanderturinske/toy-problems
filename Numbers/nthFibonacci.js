'use strict';
/**
 * Find the nth Fibonacci number
**/

// Iterative
var nthFibonacci = function (n) {
  var lastTwo = [0, 1];
  if (n === 0) {
    return 0;
  }
  for (var i = 2; i <= n; i++) {
    lastTwo.push(lastTwo.shift(0) + lastTwo[0]);
  }
  return lastTwo[1];
};

// Recursive
// var nthFibonacci = function (n) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n <= 2) {
//     return 1;
//   }
//   return nthFibonacci(n - 1) + nthFibonacci(n - 2);
// };

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
