'use strict';
/**
 * Description
**/

var NAME = function () {

};

console.log(NAME() === EXPECTED_OUTCOME);
// -> EXPECTED_OUTCOME
console.log(NAME() === EXPECTED_OUTCOME);
// -> EXPECTED_OUTCOME
console.log(NAME() === EXPECTED_OUTCOME);
// -> EXPECTED_OUTCOME
console.log(NAME() === EXPECTED_OUTCOME);
// -> EXPECTED_OUTCOME

module.exports = {
  NAME: NAME,
};
