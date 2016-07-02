'use strict';
/**
 * Implement a bubble sort
**/

var bubbleSort = function (array) {
  // define a new array from the input array
  // define a temp variable
  // define a variable called swapped
  // do
    // set swapped equal to false
    // for each element in the array except the first element
      // if the element before is greater than the one after
        // set temp equal to the one before
        // set the previous element equal to the current element
        // set the current element equal to temp
        // set swapped equal to true
  // while swapped is true
  // return array
};

console.log(bubbleSort([]) + ' is ' + [] + ' sorted');
console.log(bubbleSort([1, 2, 3, 4, 5]) + ' is ' + [1, 2, 3, 4, 5] + ' sorted');
console.log(bubbleSort([5, 2, 1, 5, 0]) + ' is ' + [5, 2, 1, 5, 0] + ' sorted');
console.log(bubbleSort([5, 2, 1, 4]) + ' is ' + [5, 2, 1, 4] + ' sorted');

module.exports = {
  bubbleSort: bubbleSort,
};
