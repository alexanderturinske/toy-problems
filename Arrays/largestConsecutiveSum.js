'use strict';
/**
 * Given an array containing positive and negative numbers, find the largest consecutive sum
**/

const largestConsecutiveSum = (array) => {

};

console.log(largestConsecutiveSum([]) === 0);
// -> 0
console.log(largestConsecutiveSum([1, 2, 3]) === 6);
// -> 6
console.log(largestConsecutiveSum([1, 2, 3, -3]) === 6);
// -> 6
console.log(largestConsecutiveSum([1, 2, -3, 4, 3]) === 7);
// -> 7

module.exports = {
  largestConsecutiveSum,
};
