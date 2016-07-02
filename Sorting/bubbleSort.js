'use strict';
/**
 * Implement a bubble sort
**/

var bubbleSort = function (array) {

};

console.log(bubbleSort([]) + ' is ' + [] + ' sorted');
console.log(bubbleSort([1, 2, 3, 4, 5]) + ' is ' + [1, 2, 3, 4, 5] + ' sorted');
console.log(bubbleSort([5, 2, 1, 5, 0]) + ' is ' + [5, 2, 1, 5, 0] + ' sorted');
console.log(bubbleSort([5, 2, 1, 4]) + ' is ' + [5, 2, 1, 4] + ' sorted');

module.exports = {
  bubbleSort: bubbleSort,
};
