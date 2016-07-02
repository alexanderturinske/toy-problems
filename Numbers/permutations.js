'use strict';
/**
 * Return an array of all the different array permutations of the given numbers
 *
 * This is going to be a tree structure, which is recursive
 *                                   R
 *               num1           num2       num3    ...
 *           num2  num3 ...    
 *        num3 ....
 *      ....
 *     [num1, num2, num3, ...]
 *
**/

var permutations = function (nums) {
  // create a numsArray from the arguments
  // instantiate empty array called allPerms
  // instantiate inner function, createPerms, that takes currentPerm array
    // instantiate currentPerms as either the array passed in or an empty array
    // base case
    // if currentPerms length is equal to numsArray length
      // push currentPerms into allPerms
      // exit function
    // recursive case
    // for every element in nums
      // set curentPerms equal to the concat element to currentPerms
      // call createPerms recursively with currentPerms
      // set currentPerms equal to the sliced version of currentPerms that doesn't have the last element
  // call createPerms
  // return allPerms
};

console.log(permutations(1, 2) === [[1, 2], [2, 1]]);
// -> [[1, 2], [2, 1]]
console.log(permutations(1, 2, 3).length === 6);
// -> 6
console.log(permutations(3, 2, 1, 0).length === 24);
// -> 24
console.log(permutations() === []);
// -> []

module.exports = {
  permutations: permutations,
};
