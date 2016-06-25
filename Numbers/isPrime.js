'use strict';
/**
 * Determine if the number is prime
*/

// Iterative
// var isPrime = function (number) {
//   if (number <= 0) {
//     return 'Invalid entry!';
//   }
//   if (number === 1 || number === 2) {
//     return true;
//   }
//   for (var i = 2; i <= Math.floor(number / 2); i++) {
//     if (!(number % i)) {
//       return false;
//     }
//   }
//   return true;
// };

// Recursively
var isPrime = function (number) {
  var test = arguments[1] || Math.floor(number / 2);
  // base cases
  if (number < 1) {
    return 'Invalid entry!';
  }
  if (test < 2) {
    return true;
  }
  if (!(number % test)) {
    return false;
  }
  // recursive case
  return isPrime(number, test - 1);
};

console.log(isPrime(-200));
//-> 'Invalid entry!'
console.log(isPrime(-1));
//-> 'Invalid entry!'
console.log(isPrime(0));
//-> 'Invalid entry!'
console.log(isPrime(1));
//-> true
console.log(isPrime(2));
//-> true
console.log(isPrime(3));
//-> true
console.log(isPrime(4));
//-> false
console.log(isPrime(80));
//-> false
console.log(isPrime(400));
//-> false

module.exports = {
isPrime: isPrime,
};
