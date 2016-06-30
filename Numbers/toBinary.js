'use strict';
/**
 * Create a function that converts a number in base 10 to base 2
**/

var toBinary = function (n) {
  // define number equal to n
  var number = n;
  // create array to hold numbers
  var numArray = [];
  // if number is odd
  if (!(n % 2)) {
    // remove add 1 to array and remove
    numArray.push(1);
    number--;
  }
  // create a counter starting at 1
  var counter = 1;
  // while remainder of number doesn't equal the number
  while (number % Math.pow(2, counter) !== number) {
    // increment counter
    counter++;
  }
  // for the number of times of the counter
  for (var i = 0; i < counter; i++) {
    // if the remainder isn't the same as the number
    if (number % Math.pow(2, counter)) {
      // set number to the remainder
      number = number % Math.pow(2, counter);
      // unshift a one into the number array
      numArray.unshift(1);
    // else
    } else {
      // unshift a zero
      numArray.unshift(0);
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
