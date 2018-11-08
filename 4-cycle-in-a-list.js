'use strict';
const LinkedList = require('./linkedList-singly');
//                         p    c
// input:  1 -> 2 -> 3 -> 4 <-> 5
// output: true
// input:  1 -> 2 -> 3 -> 4 -> 5
// output: false

//record prev node & current node
//loop through list to check that current.next is not equal to prev.next
//edge cases?

function cycle(list) {
  let prev = list.head;
  let current = list.head;

  while (current) {
    if (current.next === prev) {
      return true;
    } else {
      prev = current;
      current = current.next;
    }
  }

  return false;
}

(function main() {
  const list = new LinkedList();
  list
    .insertLast(1)
    .insertLast(2)
    .insertLast(3)
    .insertLast(4)
    .insertLast(5);

  const node = list.find(3);
  node.next = list.find(2);

  console.log(cycle(list)); // true
})();
