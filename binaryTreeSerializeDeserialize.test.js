'use strict';

var serialize = require('./binaryTreeSerializeDeserialize').serialize;
var deserialize = require('./binaryTreeSerializeDeserialize').deserialize;
var assert = require('chai').assert;

describe('Binary Tree', function () {
  describe('Problem 1', function () {
    describe('Serialize and Deserialize a Binary Tree', () => {

      var BinaryTree = function (val) {
        this.root = val;
        this.left = null;
        this.right = null;
      };

      BinaryTree.prototype.serialize = serialize;
      BinaryTree.prototype.deserialize = deserialize;

      BinaryTree.prototype.add = function (val, node, queue) {
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

      it('Should return the sorted linked list head value', function () {
        // assert.equal(coolList.linkedListInsertionSort().value, 3);
      });
    });
  });
});
