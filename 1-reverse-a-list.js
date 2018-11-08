const LinkedList = require("./linkedList-singly");
const { display } = require("./linkedList-helpers");
// 1 <- 2 <- 3 <- 4 <- 5

// null <- 1, <- 2, 3 -> 4 -> 5
// null <- 1 <- 2 -> 3 -> 4 -> 5

// TODO: deal with the HEAD special case

// store current.next in a temp variable
// current.next = previous
// previous = current;
// current = temp variable

// TODO: set head to to be the new head
// 1 <- 2 <- 3 <- 4 <- 5
function reverse(list) {
  if (!list.head) return;
  let prev = list.head;
  let current = list.head.next;
  list.head.next = null;

  while (current) {
    const temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  list.head = prev;
}

(function main() {
  const list = new LinkedList();
  list
    .insertLast(1)
    .insertLast(2)
    .insertLast(3)
    .insertLast(4)
    .insertLast(5);

  reverse(list);
  display(list); // expect [5, 4, 3, 2, 1]
})();
