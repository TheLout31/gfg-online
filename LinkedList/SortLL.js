class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function SortLL(head) {
  let dummy = head;
  let p1 = dummy;
  let temp = 0;
  while (p1 !== null) {
    let p2 = p1.next;
    while (p2 !== null) {
      if (p2.val < p1.val) {
        temp = p2.val;
        p2.val = p1.val;
        p1.val = temp;
        p2 = p2.next;
      } else {
        p2 = p2.next;
      }
    }
    p1 = p1.next;
  }
  return dummy;
}

// Example usage:

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(3);
head.next = new ListNode(4);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);
head.next.next.next.next = new ListNode(5);

console.log("Original linked list:");
let current = head;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}

const Remove = SortLL(head);

console.log("Sorted linked list:");
current = Remove;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}
