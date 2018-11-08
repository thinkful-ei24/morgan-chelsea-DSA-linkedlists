//turn list to array so we can console log
function display(list) {
  // Create return array
  let result = [];
  // Iterate through each list value
  let n = list.head;
  while (n) {
    // Push each item to the result array
    result.push(n.value);
    n = n.next;
  }
  console.log(result);
}

// 1, 2, 3, 4, 5
//size function
function size(list) {
  //loop through list and increment up a count we return
  let result = 0;
  let n = list.head;

  while (n) {
    result += 1;
    n = n.next;
  }
  console.log(result);
}

//isEmpty function
//assuming the input is a list
function isEmpty(list) {
  return list.head == null;
}

//findPrevious function
//included in class above

//findLast function
function findLast(list) {
  let n = list.head;

  while (n) {
    if (!n.next) {
      return n;
    }
    n = n.next;
  }
}

module.exports = {
  findLast,
  size,
  isEmpty,
  display
};
