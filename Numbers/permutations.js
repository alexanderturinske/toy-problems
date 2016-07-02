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
  var numsArray = Array.prototype.slice.call(arguments);
  // instantiate empty array called allPerms
  var allPerms = [];
  // instantiate inner function, createPerms, that takes currentPerm array
  var createPerms = function (currentPerms) {
    // instantiate currentPerms as either the array passed in or an empty array
    currentPerms = currentPerms || [];
    // base case
    // if currentPerms length is equal to numsArray length
    if (currentPerms.length === numsArray.length) {
      if (currentPerms.length) {
        // push currentPerms into allPerms
        allPerms.push(currentPerms);
      }
      // exit function
      return;
    }
    // recursive case
    // for every element in nums
    for (var i = 0; i < numsArray.length; i++) {
      if (currentPerms.indexOf(numsArray[i]) < 0) {
        // set curentPerms equal to the concat element to currentPerms
        currentPerms = currentPerms.concat(numsArray[i]);
        // call createPerms recursively with currentPerms
        createPerms(currentPerms);
        // set currentPerms equal to the sliced version of currentPerms that doesn't have the last element
        currentPerms = currentPerms.slice(0, -1);
      }
    }
  };
  // call createPerms
  createPerms();
  // return allPerms
  return allPerms;
};

console.log(permutations(1, 2).length === 2);
// -> 2
console.log(permutations(1, 2, 3).length === 6);
// -> 6
console.log(permutations(3, 2, 1, 0).length === 24);
// -> 24
console.log(permutations().length === 0);
// -> 0

module.exports = {
  permutations: permutations,
};
