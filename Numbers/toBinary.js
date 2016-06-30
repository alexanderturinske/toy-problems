'use strict';
/**
 * Create a function that converts a number in base 10 to base 2
**/

var toBinary = function (n) {
  // create array to hold numbers
  var numArray = [];
  var number = n;
  // create a counter starting at 1
  var counter = 0;
  // while remainder of number doesn't equal the number
  while (number % Math.pow(2, counter) !== number) {
    // increment counter
    counter++;
  }
  // for the number of times of the counter
  for (var i = counter - 1; i >= 0; i--) {
    // if the remainder isn't the same as the number
    console.log(Math.pow(2, i));
    if (number >= Math.pow(2, i)) {
      // set number to the remainder
      number -= Math.pow(2, i);
      // push a one into the number array
      numArray.push(1);
    // else
    } else {
      // push a zero
      numArray.push(0);
    }
  }
  console.log(numArray.join(''));
  // return the array joined
  return numArray.join('');
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
