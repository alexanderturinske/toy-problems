'use strict';
/**
 * Description
**/

const heapSerialize = (heap) => {
  const serialized = [];
  const queue = [];
  const search = (node) => {
    if (node === null) {
      serialized.push(-1);
    } else {
      serialized.push(node.value);
    }
    // recursive case
    if (node !== null) {
      queue.push(node.left);
      queue.push(node.right);
    }
    if (queue.length > 0) {
      search(queue.shift());
    }
  };
  search(heap.root);
  return serialized;
};

const heapDeserialize = (heapArray) => {

};

class MinBinaryHeap {
  constructor(value) {
    this.root = {
      value,
      left: {
        value: value + 1,
        left: {
          value: value + 3,
          left: null,
          right: null,
        },
        right: null,
      },
      right: {
        value: value + 2,
        left: null,
        right: null,
      },
    };
  }
};
const heap = new MinBinaryHeap(1);
console.log(heapSerialize(heap) + ' === [1, 2, 3, 4, -1, -1, -1, -1, -1]');
// -> [2, 3, 4, 5]
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
