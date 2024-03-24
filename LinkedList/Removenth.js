class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function Removenth(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;

    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return dummy.next;
}

// Example usage:

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original linked list:");
let current = head;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}

const Remove = Removenth(head,2);

console.log("Removed linked list:");
current = Remove;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}
