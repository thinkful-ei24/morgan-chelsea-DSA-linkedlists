"use strict";
const LinkedList = require("./linkedList-singly");

// input:  1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
//                             x                   x
// output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9

function middleOfList(list) {
  // return if list is falsy
  if (list == null) return;
  // Create two pointers to traverse the list
  let leader = list.head;
  let follower = list.head;
  // stop traversing when leader is null or leader.next is null
  while (leader && leader.next) {
    // follower pointer traverses 1 node at a time
    follower = follower.next;
    // leader pointer traverses 2 nodes at a time
    leader = leader.next.next;
  }
  return follower;
}

(function main() {
  const list = new LinkedList();
  list
    .insertLast(1)
    .insertLast(2)
    .insertLast(3)
    .insertLast(4)
    .insertLast(5)
    .insertLast(6)
    .insertLast(7)
    .insertLast(8)
    .insertLast(9)
    .insertLast(10);

  console.log(middleOfList(list)); // expect 3
})();
