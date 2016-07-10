'use strict';
/**
 * Given an array containing positive and negative numbers, find the largest consecutive product
**/

const largestConsecutiveProduct = (array) => {
  let largest = 0;
  let current = 0;
  const negatives = [];
  if (!array.length) {
    return largest;
  }
  // if there is a zero
  if (array.indexOf(0) >= 0) {
    // split up the array and call recursivly
    const first = largestConsecutiveProduct(array.slice(0, array.indexOf(0)));
    const second = largestConsecutiveProduct(array.slice(array.indexOf(0) + 1));
    if (largest < first || largest < second) {
      largest = Math.max(first, second);
    }
  }
  // find all the negative numbers
  array.forEach((e, i) => {
    if (e < 0) {
      negatives.push(i);
    }
  });
  // if there is an odd number of negative numbers
  if (negatives.length % 2) {
    // split up the array and call it recursively
    const third = largestConsecutiveProduct(array.slice(0, negatives[negatives.length - 1]));
    const fourth = largestConsecutiveProduct(array.slice(negatives[0] + 1));
    if (largest < third || largest < fourth) {
      largest = Math.max(third, fourth);
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (!current) {
      current = array[i];
    } else {
      current = current * array[i];
      if (largest < current) {
        largest = current;
      }
    }
  }
  return largest;
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
