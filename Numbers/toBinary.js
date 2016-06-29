'use strict';
/**
 * Create a function that converts a number in base 10 to base 2
**/

var toBinary = function (n) {
  // define number equal to n
  // create array to hold numbers
  // if number is odd, remove add 1 to array and remove
  // create a counter starting at 1
  // while remainder of number doesn't equal the number
    // increment counter
  // for the number of times of the counter
    // if the remainder isn't the same as the number
      // set number to the remainder
      // unshift a one into the number array
    // else
      // unshift a zero
  // return the array joined
};

console.log(toBinary(31) === '11111');
// -> '11111'
console.log(toBinary(9) === '1001');
// -> '1001'
console.log(toBinary(6) === '110');
// -> '110'
console.log(toBinary(5) === '101');
// -> '101'

module.exports = {
  toBinary: toBinary,
};
