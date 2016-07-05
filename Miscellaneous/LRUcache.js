'use strict';

/**
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
set(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

**/

class LRUcache {
  constructor(maxLength) {
    this.head = null;
    this.tail = null;
    this.maxLength = maxLength;
    this.length = 0;
  }

  get(key) {
    // create temp variable that will store the value
    let temp;
    // create a recursive function, find, that takes a node as an argument
    const find = node => {
      // base case
      // if node.key equals key
      if (node.key === key) {
        // set temp equal to node.value
        temp = node.value;
        // if the current node doesn't equal the head
        if (this.head.key !== node.key) {
          // set the previous node's next value to the current node's next value
          node.prev.next = node.next;
          // set the current node's next value equal to the head
          node.next = this.head;
          // set the head's prev value equal to the current node
          this.head.prev = node;
          // set the head equal to the current node
          this.head = node;
        }
        return;
      }
      // if the value doesn't exist
      if (!node.next) {
        temp = -1;
      }
      // recursive case
      // call find on node.next
      find(node.next);
    };
    // call find with this.head
    find(this.head);
    // return temp
    return temp;
  }

  // TODO account for if the key is already there
  set(key, value) {
    // if head isn't there
    if (!this.head) {
      if (this.maxLength) {
        // set as head with a next of null
        this.head = this.newNode(key, value, null, null);
        // set as tail
        this.tail = this.head;
        // increment length by 1
        this.length++;
      }
    // if head is there
    } else {
      // set a temp variable equal to the head
      const temp = this.head;
      // assign the new head to the new key/value object with the next being null
      this.head = this.newNode(key, value, temp, null);
      temp.prev = this.head;
      // increment length by 1
      this.length++;
      // if the length is now too long
      if (this.length > this.maxLength) {
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
      }
    }
  }

  retrieveAll() {
    // define an array, values, to store the values in
    const values = [];
    // define a recursive function that takes a node as an argument
    const findAll = (node) => {
      // push node.value into the values
      values.push(node.value);
      // base case
      // if node.next equals null
      if (!node.next) {
        // return;
        return;
      }
      // recursive case
      // call the recursive function with node.next
      findAll(node.next);
    };
    // call recursive function with this.head
    findAll(this.head);
    // return values
    return values;
  }

  newNode(key, value, next, prev) {
    return {
      key,
      value,
      next,
      prev,
    };
  }

}
const test = new LRUcache(5);
test.set(0, 'a');
test.set(1, 'b');
test.set(2, 'c');
test.set(3, 'd');
test.set(4, 'e');
console.log(test.retrieveAll());
// -> ['e', 'd', 'c', 'b', 'a']
test.set(5, 'f');
console.log(test.retrieveAll());
// -> ['f', 'e', 'd', 'c', 'b']
test.get(3);
test.get(4);
console.log(test.retrieveAll());
// -> ['e', 'd', 'f', 'c', 'b']
test.get(2);
console.log(test.retrieveAll());
// -> ['c', 'e', 'd', 'f', 'b']

module.exports = {
  LRUcache,
};
