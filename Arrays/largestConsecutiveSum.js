'use strict';
/**
 * Given an array containing positive and negative numbers, find the largest consecutive sum
**/

// brute force
const largestConsecutiveSum = (array) => {
  let longest = 0;
  let current = 0;
  for (let i = 0; i < array.length; i++) {
    current = array.slice(i).reduce( (acc, cur) => {
      return acc + cur;
    }, 0);
    if (longest < current) {
      longest = current;
    }
  }
  let recursive = 0;
  if (array.length) {
    recursive = largestConsecutiveSum(array.slice(0, -1));
  }
  return Math.max(longest, recursive);
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
