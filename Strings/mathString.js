'use strict';
/**
 * Take a string equation (E.g., ‘5+4*3-8’) and calculate the result and write a test
 help: abstract syntax trees, recursive, eval
**/

const mathString = (string) => {
  let mathArray = string.match(/\d+|\D/g);
  let currentOperation = 0;
  let first = 0;
  let second = 0;
  while (mathArray.indexOf('*') > -1 || mathArray.indexOf('/') > -1) {
    first = mathArray.indexOf('*');
    second = mathArray.indexOf('/');
    if ((first < second || second === -1) && first !== -1) {
      mathArray = mathArray.slice(0, first - 1).concat(parseInt(mathArray[first - 1]) * parseInt(mathArray[first + 1]), mathArray.slice(first + 2));
    } else {
      mathArray = mathArray.slice(0, second - 1).concat(parseInt(mathArray[second - 1]) / parseInt(mathArray[second + 1]), mathArray.slice(second + 2));
    }
  }
  while (mathArray.indexOf('+') > -1 || mathArray.indexOf('-') > -1) {
    first = mathArray.indexOf('+');
    second = mathArray.indexOf('-');
    if ((first < second || second === -1) && first !== -1) {
      mathArray = mathArray.slice(0, first - 1).concat(parseInt(mathArray[first - 1]) + parseInt(mathArray[first + 1]), mathArray.slice(first + 2));
    } else {
      mathArray = mathArray.slice(0, second - 1).concat(parseInt(mathArray[second - 1]) - parseInt(mathArray[second + 1]), mathArray.slice(second + 2));
    }
  }
  return mathArray[0];
};

// TODO separate out operators into other functions
// TODO recursive solution

console.log(mathString('5+4*3-8') === 9);
// -> 9
console.log(mathString('12*12/2+8') === 80);
// -> 80
console.log(mathString('12+12/2*8') === 60);
// -> 96
console.log(mathString('1000*9/3000') === 3);
// -> 3

module.exports = {
  mathString,
};
