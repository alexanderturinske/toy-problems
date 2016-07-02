'use strict';
/**
 * Implement a bubble sort
**/

var bubbleSort = function (array) {
  // define a new array from the input array
  var newArray = array.slice();
  // define a temp variable
  var temp;
  // define a variable called swapped
  var swapped;
  // do
  do {
    // set swapped equal to false
    swapped = false;
    // for each element in the array except the first element
    for (var i = 1; i < newArray.length; i++) {
      // if the element before is greater than the one after
      if (newArray[i - 1] > newArray[i]) {
        // set temp equal to the one before
        temp = newArray[i - 1];
        // set the previous element equal to the current element
        newArray[i - 1] = newArray[i];
        // set the current element equal to temp
        newArray[i] = temp;
        // set swapped equal to true
        swapped = true;
      }
    }
  // while swapped is true
  } while (swapped);
  // return array
  return newArray;
};

console.log(bubbleSort([]) + ' is ' + [] + ' sorted');
console.log(bubbleSort([0]) + ' is ' + [0] + ' sorted');
console.log(bubbleSort([1, 2, 3, 4, 5]) + ' is ' + [1, 2, 3, 4, 5] + ' sorted');
console.log(bubbleSort([5, 2, 1, 5, 0]) + ' is ' + [5, 2, 1, 5, 0] + ' sorted');
console.log(bubbleSort([5, 2, 1, 4]) + ' is ' + [5, 2, 1, 4] + ' sorted');

module.exports = {
  bubbleSort: bubbleSort,
};
