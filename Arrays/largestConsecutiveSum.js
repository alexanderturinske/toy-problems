'use strict';
/**
 * Given an array containing positive and negative numbers, find the longest consecutive sum
**/

const longestConsecutiveSum = (array) => {

};

console.log(longestConsecutiveSum([]) === 0);
// -> 0
console.log(longestConsecutiveSum([1, 2, 3]) === 6);
// -> 6
console.log(longestConsecutiveSum([1, 2, 3, -3]) === 6);
// -> 6
console.log(longestConsecutiveSum([1, 2, -3, 4, 3]) === 7);
// -> 7

module.exports = {
  longestConsecutiveSum,
};
