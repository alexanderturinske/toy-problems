'use strict';
/**
A robot is located at the top-left corner of a m x n grid.

The robot can only move either down or right at any point in time. The robot is trying to reach
the bottom-right corner of the grid.

How many possible unique paths are there?
**/

var uniquePaths = function (m, n) {

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
