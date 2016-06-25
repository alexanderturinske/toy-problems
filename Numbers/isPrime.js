'use strict';
/**
 * Determine if the number is prime
*/

var isPrime = function (number) {
  if (number <= 0) {
    return 'Invalid entry!';
  }
  if (number === 1 || number === 2) {
    return true;
  }
  for (var i = 2; i <= Math.floor(number / 2); i++) {
    if (!(number % i)) {
      return false;
    }
  }
  return true;
};

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
console.log(isPrime(400));
//-> false

module.exports = {
isPrime: isPrime,
};
