'use strict';
/**
 * Given an array containing positive and negative numbers, find the largest consecutive product
**/

const largestConsecutiveProduct = (array) => {

};

console.log(largestConsecutiveProduct([]) === 0);
// -> 0
console.log(largestConsecutiveProduct([1, 2, 3]) === 6);
// -> 6
console.log(largestConsecutiveProduct([1, 2, 3, -3]) === 6);
// -> 6
console.log(largestConsecutiveProduct([1, 2, -3, 4, 3]) === 12);
// -> 12
console.log(largestConsecutiveProduct([1, 2, -3, 4, -3]) === 72);
// -> 72
console.log(largestConsecutiveProduct([1, 2, -3, 0, -3]) === 2);
// -> 2

module.exports = {
  largestConsecutiveProduct,
};
