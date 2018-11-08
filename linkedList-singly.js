'use strict';

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

  //insert after an item

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

  //insert an item at a specific position

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

  SLL.insertFirst('Apollo')
    .insertFirst('Boomer')
    .insertFirst('Helo')
    .insertFirst('Husker')
    .insertFirst('Starbuck')
    .insertFirst('Tauhida');

  SLL.remove('squirrel');

  SLL.insertBefore('Chelsea', 'Starbuck');

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
