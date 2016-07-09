'use strict';
/**
There is a hypothesis floating around that SAT score is a strong indicator of GPA.
 Your task is to provide the strongest counter example for this hypothesis.
 Given a data set of (sat, gpa) for the final year of a group of students, devise an algorithm to
  construct the longest sequence of (sati, gpai) of students with progressively better SAT scores,
  and progressively worse gpa’s, i.e. sat1 < sat2 < … < satk and gpa1 > gpa2 > … > gpak
  ( Assume SAT scores and gpa’s are unique )
**/

const longestSortedTuples = (tuples) => {

};

let temp = [];
console.log(longestSortedTuples(temp) + ' is the longest from ' + temp);
// -> []
temp = [[1, 4], [2, 3], [3, 2], [4, 1]];
console.log(longestSortedTuples(temp) + ' is the longest from ' + temp);
// -> length 4
temp = [[1, 1], [5, 5], [3, 3], [4, 4]];
console.log(longestSortedTuples(temp) + ' is the longest from ' + temp);
// -> length 1
temp = [[1, 5], [2, 4], [3, 3], [4, 4]];
console.log(longestSortedTuples(temp) + ' is the longest from ' + temp);
// -> length 3

module.exports = {
  longestSortedTuples,
};
