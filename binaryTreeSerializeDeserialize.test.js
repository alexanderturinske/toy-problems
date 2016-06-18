'use strict';

var serialize = require('./binaryTreeSerializeDeserialize').serialize;
var deserialize = require('./binaryTreeSerializeDeserialize').deserialize;
var assert = require('chai').assert;

describe('Binary Tree', () => {
  describe('Problem 1', () => {
    describe('Serialize and Deserialize a Binary Tree', () => {

      function BinaryTree(val) {
        this.root = val;
        this.left = this.right = null;
      }

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

      var sapling = new BinaryTree(5);
      sapling.add(1);
      sapling.add(2);
      sapling.add(3);
      sapling.add(4);

      it('Should return the sorted linked list head value', () => {
        // assert.equal(coolList.linkedListInsertionSort().value, 3);
      });
    });
  });
});
