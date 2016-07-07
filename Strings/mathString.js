'use strict';
/**
 * Take a string equation (E.g., ‘5+4*3-8’) and calculate the result and write a test
 help: abstract syntax trees, recursive, eval
**/

const mathString = (string) => {
  const operators = [['*', '/'], ['+', '-']];
  let mathArray = string.split('');
  for (let i = 0; i < mathArray; i++) {
    let j = i;
    while (mathArray[j] !== '*' || mathArray[j] !== '/' || mathArray[j] !== '+' || mathArray[j] !== '-') {
      j++;
    }
    mathArray = mathArray.slice(i + 1, j + 1).join('').concat(mathArray.slice(j + 1));
  };
  operators.forEach((ele, ind) => {
    for (var k = 0; k < mathArray.length; k++) {
      let result;
      if (mathArray[k] === ele[0]) {
        if (ele[0] === '*') {
          result = parseInt(mathArray[k - 1], 10) * parseInt(mathArray[k + 1], 10);
          mathArray = mathArray.slice(k + 2).unshift(result);
        } else {
          result = parseInt(mathArray[k - 1], 10) + parseInt(mathArray[k + 1], 10);
          mathArray = mathArray.slice(k + 2).unshift(result);
        }
      } else if (mathArray[k] === ele[1]) {
        if (ele[1] === '-') {
          result = parseInt(mathArray[k - 1], 10) / parseInt(mathArray[k + 1], 10);
          mathArray = mathArray.slice(k + 2).unshift(result);
        } else {
          result = parseInt(mathArray[k - 1], 10) - parseInt(mathArray[k + 1], 10);
          mathArray = mathArray.slice(k + 2).unshift(result);
        }
      }
    }
  });
  // TODO why is mathArray a number?
  console.log(typeof mathArray);
  // return parseInt(mathArray.join(''));
};

console.log(mathString('5+4*3-8') === 9);
// -> 9
console.log(mathString('12*12/2+8') === 80);
// -> 80
console.log(mathString('12+12/2*8') === 96);
// -> 96
console.log(mathString('1000*9/3000') === 3);
// -> 3

module.exports = {
  mathString,
};
