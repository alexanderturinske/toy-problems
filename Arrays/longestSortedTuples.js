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
  // sort tuples by one or the other (in the below case, sort the SAT score in ascending order)
  // using a merge sort because it has O(n log(n))
  const tupleMergeSort = (tupleArray) => {
    // base case
    if (tupleArray.length <= 1) {
      return tupleArray;
    }

    // recursive case
    const front = tupleMergeSort(tupleArray.slice(0, tupleArray.length / 2));
    const back = tupleMergeSort(tupleArray.slice(tupleArray.length / 2));

    // merge sorted arrays
    const output = [];
    while (front.length || back.length) {
      if (!front.length) {
        output.push(back.shift());
      } else if (!back.length) {
        output.push(front.shift());
      } else if (front[0][0] < back[0][0]) {
        output.push(front.shift());
      } else {
        output.push(back.shift());
      }
    }

    // return sorted combination of front and back
    return output;
  };
  const sortedTuples = tupleMergeSort(tuples);

  // create a storage array to store all the array of tuples
  const storage = [];

  // define the recursive function, findLongest, to build the decision tree
  const findLongest = (currentArray) => {
    currentArray = currentArray || [];
    // recursive case
    sortedTuples.forEach((ele, ind) => {
      if (currentArray === undefined || currentArray.length === 0) {
        currentArray = [ele];
        findLongest(currentArray);
      } else {
        if (currentArray[currentArray.length - 1][1] > ele[1]) {
          currentArray.push(ele);
          findLongest(currentArray);
          currentArray.pop();
        }
      }
    });

    // base case
    storage.push(currentArray.slice());
  };

  // call recursive function, findLongest
  findLongest();

  // find and return the longest of the arrays
  return storage.reduce((accumulator, current) => {
    return accumulator.length < current.length ? current : accumulator;
  }, []);
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
