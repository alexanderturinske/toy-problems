'use strict';
/**
 * Description
**/

const asyncMap = (tasks, callback) => {
  const resultArray = [];
  let counter = 0;
  console.log(tasks);
  for (let i = 0; i < tasks.length; i++) {
    ((i) => {
      tasks[i]((result) => {
        resultArray[i] = result;
        counter++;
        if (counter === tasks.length) {
          return callback(resultArray);
        }
      });
    })(i);
  }
};

console.log(asyncMap([
 (cb) => {
   setTimeout(() => {
     cb('first');
   }, 200);
 },
 (cb) => {
   setTimeout(() => {
     cb('second');
   }, 100);
 }
],
 (results) => {
   console.log(results);
   // ['first', 'second']
}));

// console.log(asyncMap() === 0);
// // -> 0
// console.log(asyncMap() === 0);
// // -> 0
// console.log(asyncMap() === 0);
// // -> 0
// console.log(asyncMap() === 0);
// // -> EXPECTED_OUTCOME

module.exports = {
  asyncMap,
};
