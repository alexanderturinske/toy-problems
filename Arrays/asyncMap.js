'use strict';
/**
 * Implement async map
**/

// const asyncMap = (tasks, callback) => {
//   const resultArray = [];
//   let counter = 0;
//   console.log(tasks);
//   for (let i = 0; i < tasks.length; i++) {
//   // this IIFE is only necessary if one is using var i = 0 due to global scoping
//     ((i) => {
//       tasks[i]((result) => {
//         resultArray[i] = result;
//         counter++;
//         if (counter === tasks.length) {
//           return callback(resultArray);
//         }
//       });
//     })(i);
//   }
// };

const asyncMap = (tasks, callback) => {
  const results = [];
  let count = 0;
  for (let i = 0; i < tasks.length; i++) {
    tasks[i]((result) => {
      results[i] = result;
      count++;
      if (count === tasks.length) {
        return callback(results);
      }
    });
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
