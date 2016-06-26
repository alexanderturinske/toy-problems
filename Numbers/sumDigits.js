'use strict';
/**
 * Sum all the digits of a number into a single digit number
**/

var sumDigits = function (n) {

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
