'use strict';

import { describe, it } from 'mocha';
import { serialize, deserialize } from './binaryTreeSerializeDeserialize';
import { assert } from 'chai';

describe('Binary Tree', () => {
  describe('Problem 1', () => {
    describe('Serialize and Deserialize a Binary Tree', () => {

      function BinaryTree(val) {
        this.root = val;
        this.left = this.right = null;
      };

      BinaryTree.prototype.serialize = serialize;
      BinaryTree.prototype.deserialize = deserialize;

      BinaryTree.prototype.add = (val, node, queue) => {
        queue = queue || [];
        node = node || this.root;
        if (!node.left) {
          node.left = {
            value: val,
            left: null,
            right: null,
          };
          return;
        }
        if (!node.right) {
          node.left = {
            value: val,
            left: null,
            right: null,
          };
          return;
        }
        que.push(node.left);
        que.push(node.right);
        return this.add(val, queue.shift(), queue);
      };

      let sapling = new BinaryTree(5);
      sapling.add(1);
      sapling.add(2);
      sapling.add(3);
      sapling.add(4);
      console.log(sapling);

      it('Should return the sorted linked list head value', () => {
        // assert.equal(coolList.linkedListInsertionSort().value, 3);
      });
    });
  });
});
