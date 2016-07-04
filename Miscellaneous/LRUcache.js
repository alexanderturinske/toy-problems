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

  }

  set(key, value) {
    // if head isn't there
    if (!this.head) {
      // set as head with a next of null
      this.head = this.newNode(key, value, null, null);
    // if head is there
    } else {
      // set a temp variable equal to the head
      const temp = this.head;
      // assign the new head to the new key/value object with the next being null
      this.head = this.newNode(key, value, temp, null);
      temp.prev = this.head;
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
console.log(test.retrieveAll());
// -> ['e', 'd', 'c', 'b', 'a']
test.set(5, 'f');
console.log(test.retrieveAll() === ['f', 'e', 'd', 'c', 'b']);
// -> ['f', 'e', 'd', 'c', 'b']
test.get(3);
test.get(4);
console.log(test.retrieveAll() === ['e', 'd', 'f', 'c', 'b']);
// -> ['e', 'd', 'f', 'c', 'b']
test.get(2);
console.log(test.retrieveAll() === ['c', 'e', 'd', 'f', 'b']);
// -> ['c', 'e', 'd', 'f', 'b']

module.exports = {
  LRUcache,
};
