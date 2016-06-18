'use strict';

import { serialize, deserialize } from './binaryTreeSerializeDeserialize';
import { assert } from 'chai';

describe('', () => {
  describe('problem 1', () => {
    describe('the linkedListInsertionSort function', () => {

      function BinaryTree(val) {
        this.val = val;
        this.left = this.right = null;
      };

      BinaryTree.prototype.serialize = serialize;
      BinaryTree.prototype.deserialize = deserialize;
      BinaryTree.prototype.addNode = (val) => {

      };

      let sapling = new BinaryTree(5);

      it('Should return the sorted linked list head value', () => {
        // assert.equal(coolList.linkedListInsertionSort().value, 3);
      });
    });
  });
});