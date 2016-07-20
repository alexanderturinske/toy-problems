'use strict';
/**
 * Description
**/

const heapSerialize = (heap) => {
  const queue = [];
  const search = (node) => {
    // base case
    if (node.left === null && node.right === null) {
      return;
    }
    // recursive case
    if (node.left) {
      queue.push(node.left.value);
      if (node.right) {
        queue.push(node.right.value);
        search(node.left);
        search(node.right);
      } else {
        search(node.left);
      }
    }
  };
  search(heap.root);
  return queue;
};

const heapDeserialize = (heapArray) => {

};

// console.log(heapSerialize() === EXPECTED_OUTCOME);
// // -> EXPECTED_OUTCOME
// console.log(heapSerialize() === EXPECTED_OUTCOME);
// // -> EXPECTED_OUTCOME
// console.log(heapSerialize() === EXPECTED_OUTCOME);
// // -> EXPECTED_OUTCOME
// console.log(heapSerialize() === EXPECTED_OUTCOME);
// // -> EXPECTED_OUTCOME

// console.log(heapDeserialize() === EXPECTED_OUTCOME);
// // -> EXPECTED_OUTCOME
// console.log(heapDeserialize() === EXPECTED_OUTCOME);
// // -> EXPECTED_OUTCOME
// console.log(heapDeserialize() === EXPECTED_OUTCOME);
// // -> EXPECTED_OUTCOME
// console.log(heapDeserialize() === EXPECTED_OUTCOME);
// // -> EXPECTED_OUTCOME

module.exports = {
  heapSerialize,
  heapDeserialize,
};
