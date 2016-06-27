'use strict';
/**
 * Sum all the digits of a number into a single digit number
 * Try it recursively
 * Try it iteratively
 * Try it in constant time
**/

// Recursive
var sumDigits = function (n) {
  var nArr = typeof n === 'string' ? n.split('') : n.toString().split('');
  // base case
  if (nArr.length === 1) {
    return parseInt(nArr[0]);
  }
  // recursive case
  return sumDigits(nArr.reduce(function (accumulator, current) {
    return accumulator + parseInt(current);
  }, 0));
};

console.log(sumDigits(1) === 1);
// -> 1
console.log(sumDigits(10) === 1);
// -> 1
console.log(sumDigits(29) === 2);
// -> 2
console.log(sumDigits(299) === 2);
// -> 2
console.log(sumDigits(999) === 9);
// -> 9
console.log(sumDigits(911) === 2);
// -> 2

module.exports = {
  sumDigits: sumDigits,
};
