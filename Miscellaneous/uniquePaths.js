'use strict';
/**
A robot is located at the top-left corner of a m x n grid.

The robot can only move either down or right at any point in time. The robot is trying to reach
the bottom-right corner of the grid.

How many possible unique paths are there?
**/

var uniquePaths = function (m, n) {
  // instantiate counter equal to 0
  var counter = 0;
  // instantiate inner function paths that takes a y and x parameter
  var paths = function (y, x) {
    // base cases
    // if y is greater than m or x is greater than n
    if (y === m || x === n) {
      // return out of the function
      return;
    }
    // if y equals m and x equals n
    if (y === m - 1 && x === n - 1) {
      // increment counter
      counter++;
      // return
      return;
    }
    // recursive case
    // call paths with y + 1, x
    paths(y + 1, x);
    // call paths with y, x + 1
    paths(y, x + 1);
  };
  // call paths with m and n
  paths(0, 0);
  // return counter
  return counter;
};

console.log(uniquePaths(1, 2) === 1);
// -> 1
console.log(uniquePaths(2, 2) === 2);
// -> 2
console.log(uniquePaths(2, 3) === 3);
// -> 3
console.log(uniquePaths(3, 3) === 6);
// -> 6

module.exports = {
  uniquePaths: uniquePaths,
};
