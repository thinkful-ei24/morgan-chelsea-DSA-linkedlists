"use strict";

//Node - private class
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

//Linked list class
class LinkedList {
  constructor() {
    this.head = null;
  }

  //Apollo, Boomer, Helo, Husker, Starbuck
  //find before
  findNodeBefore(item) {
    let current = this.head;

    if (current.value === item) {
      return;
    }

    while (current) {
      if (current.next && current.next.value === item) {
        return current;
      } else {
        current = current.next;
      }
    }
  }

  //insert first item
  insertFirst(item) {
    this.head = new _Node(item, this.head);
    return this;
  }

  //'new name', Apollo, Boomer, Helo, Husker, Starbuck
  //insert before an item
  insertBefore(item, key) {
    if (this.head.value === key) {
      return (this.head = new _Node(item, this.head));
    }

    let node = this.findNodeBefore(key);

    if (node) {
      let newNode = new _Node(item, node.next);
      node.next = newNode;
    }
  }

  // insert after an item
  // we can assume that the given key exists in the list
  insertAfter(item, key) {
    const nodeBefore = this.find(key);
    if (nodeBefore) {
      const node = new _Node(item, nodeBefore.next);
      nodeBefore.next = node;
    }
  }

  //insert last item
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
    return this;
  }

  // insert an item at a specific position
  // 100, 101, 102, 103, 104 => 100, 101, 102, 103, 104, 'hi'
  // find position - 1
  // insert node after position - 1
  insertAt(position, item) {
    // SPECIAL CASE: inserting at head
    if (position === 1) {
      const node = new _Node(item, this.head);
      this.head = node;
      return this;
    }
    let cursorPosition = 1;
    let cursor = this.head;
    // Stop at tail even if the given position is greater than the length of the list
    while (cursor.next && cursorPosition < position - 1) {
      cursor = cursor.next;
      cursorPosition++;
    }
    const node = new _Node(item, cursor.next);
    cursor.next = node;
    return this;
  }

  //find item
  find(item) {
    let current = this.head;

    while (current) {
      if (current.value === item) {
        return current;
      } else {
        current = current.next;
      }
    }
    return current;
  }

  //Apollo, Boomer, Helo, Husker, Starbuck
  //remove item
  remove(item) {
    let current = this.head;

    if (current.value === item) {
      return (this.head = this.head.next);
    }

    let node = this.findNodeBefore(item);

    if (node) {
      return (node.next = node.next.next);
    }
  }
}

function main() {
  let SLL = new LinkedList();

  SLL.insertFirst("Apollo")
    .insertFirst("Boomer")
    .insertFirst("Helo")
    .insertFirst("Husker")
    .insertFirst("Starbuck")
    .insertFirst("Tauhida");

  SLL.remove("squirrel");
  SLL.insertBefore("Chelsea", "Starbuck");
  SLL.insertAfter("ni hao", "Chelsea");
  SLL.insertAt(1000, "more chinese");

  console.log(listToArray(SLL));
}

main();

//turn list to array so we can console log
function listToArray(list) {
  // Create return array
  let result = [];
  // Iterate through each list value
  let n = list.head;
  while (n) {
    // Push each item to the result array
    result.push(n.value);
    n = n.next;
  }
  return result;
}

//display function

//size function

//isEmpty function

//findPrevious function

//findLast function

// Mystery program
// function WhatDoesThisProgramDo(lst){
//   let current = lst.head;
//   while(current !== null){
//       let newNode = current;
//       while (newNode.next !== null) {
//           if (newNode.next.value === current.value) {
//               newNode.next = newNode.next.next;
//           }
//           else{
//               newNode = newNode.next;
//           }
//       }
//       current = current.next;
//   }
// }

//
