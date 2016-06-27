'use strict';
/**
 * Sum all the digits of a number into a single digit number
 * Try it recursively
 * Try it iteratively
 * Try it in constant time
**/

// Recursive
// var sumDigits = function (n) {
//   var nArr = typeof n === 'string' ? n.split('') : n.toString().split('');
//   // base case
//   if (nArr.length === 1) {
//     return parseInt(nArr[0]);
//   }
//   // recursive case
//   return sumDigits(nArr.reduce(function (accumulator, current) {
//     return accumulator + parseInt(current);
//   }, 0));
// };

// Constant Time
// var sumDigits = function (n) {
//   if (n === 0) {
//     return 0
//   } else if (!((n - 1) % 9)) {
//     return 1;
//   } else if (!((n - 2) % 9)) {
//     return 2;
//   } else if (!((n - 3) % 9)) {
//     return 3;
//   } else if (!((n - 4) % 9)) {
//     return 4;
//   } else if (!((n - 5) % 9)) {
//     return 5;
//   } else if (!((n - 6) % 9)) {
//     return 6;
//   } else if (!((n - 7) % 9)) {
//     return 7;
//   } else if (!((n - 8) % 9)) {
//     return 8;
//   } else if (!((n - 9) % 9)) {
//     return 9;
//   }
// };

var sumDigits = function (n) {
  if (n % 9) {
    return n % 9;
  } else {
    return 9;
  }
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
