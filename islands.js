'use strict';

/**
 * Given a matrix where 1s represent land and 0s represent water, determine how
 * many islands there are in the ocean where 1s next to each other are considered
 * one island
 *
 * EXAMPLE
 * var test = [[1, 0, 0, 0],
 *             [1, 0, 1, 0],
 *             [0, 0, 0, 1],
 *             [0, 1, 0, 0]]
 *
 * console.log(findIslands(test));
 * //-> 3
 */

var findIslands = function(matrix) {
  // define an array, tupleArray, to store the position of the land
  // define an array, queue, to act as a queue
  // define counter to count the number of islands
  // define check as the tuple one is checking against
  // traverse the matrix and create a tuple holding the information of the [y, x] and store it in tupleArray
  // for every element in tupleArray
    // remove the first element from the tupleArray and place it in the queue
    // increment counter by one
    // for every element in queue
      // remove the first element from the queue and set check equal to it
      // for every element in tupleArray
        // if any other tuple is near check, place them in the queue
  // return counter
};
