'use strict';
/**
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
set(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

**/

var LRUcache = function () {

};

LRUcache.prototype.get = function (key) {

};

LRUcache.prototype.set = function (key, value) {

};

LRUcache.prototype.retrieveAll = function() {

};

var test = new LRUcache();
test.set(0, 'a');
test.set(1, 'b');
test.set(2, 'c');
test.set(3, 'd');
test.set(4, 'e');
console.log(test.retrieveAll() === ['e', 'd', 'c', 'b', 'a']);
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
  LRUcache: LRUcache,
};
