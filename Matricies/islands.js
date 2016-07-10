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
  var tupleArray = [];
  // define an array, queue, to act as a queue
  var queue = [];
  // define counter to count the number of islands
  var counter = 0;
  // define check as the tuple one is checking against
  var check = [];
  // traverse the matrix and create a tuple holding the information of the [y, x] and store it in tupleArray
  matrix.forEach(function (e, j) {
    e.forEach(function (el, i) {
      if (el) {
        tupleArray.push([j, i]);
      }
    });
  });
  // for every element in tupleArray
  while (tupleArray.length) {
    // remove the first element from the tupleArray and place it in the queue
    queue.push(tupleArray.shift());
    // increment counter by one
    counter++;
    console.log('c', queue);
    // for every element in queue
    while (queue.length) {
      var eleme = tupleArray[0];
      // remove the first element from the queue and set check equal to it
      check = queue.shift();
      // for every element in tupleArray
      tupleArray.forEach(function (eleme, l) {
        // if any other tuple is near check, place them in the queue
        if (eleme[0] + 1 === check[0] && eleme[1] === check[1] ||
          eleme[0] === check[0] && eleme[1] + 1 === check[1] ||
          eleme[0] === check[0] && eleme[1] - 1 === check[1] ||
          eleme[0] - 1 === check[0] && eleme[1] === check[1]
        ) {
          queue.push(eleme);
          tupleArray.splice(l, 1);
        }
      });
    };
  };
  // return counter
  return counter;
};

var test = [[1, 0, 0, 0],
            [1, 0, 1, 0],
            [0, 1, 0, 1],
            [0, 0, 1, 0]];

console.log(findIslands(test));