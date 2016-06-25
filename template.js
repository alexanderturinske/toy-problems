'use strict';
/**
 * Description
**/

var NAME = function () {

};

console.log(NAME());
//-> EXPECTED OUTCOME
console.log(NAME());
//-> EXPECTED OUTCOME
console.log(NAME());
//-> EXPECTED OUTCOME
console.log(NAME());
//-> EXPECTED OUTCOME

module.exports = {
NAME: NAME,
};
