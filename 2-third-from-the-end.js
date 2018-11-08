'use strict';
const LinkedList = require('./linkedList-singly');
const { display } = require('./linkedList-helpers');

//input: 1 -> 2 -> 3 -> 4 -> 5
//                  x
//output: 1 -> 2 -> 3 -> 4 -> 5

//keep track current node
//counter incrementing up to get length
//find value of length - 2
// loop until value
// return node

function thirdFromEnd(list) {
  let current = list.head;
  let counter = 0;

  while (current) {
    counter++;
    current = current.next;
  }
  //value is 2
  let value = counter - 3;
  current = list.head;

  for (let i = 1; i <= value; i++) {
    current = current.next;
  }

  return current;
}

(function main() {
  const list = new LinkedList();
  list
    .insertLast(1)
    .insertLast(2)
    .insertLast(3)
    .insertLast(4)
    .insertLast(5);

  console.log(thirdFromEnd(list)); // expect 3
})();
