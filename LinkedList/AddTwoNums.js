class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function AddNums(head, head1) {
  let result = new ListNode(0);
  let ptr = result;
  let carry = 0;
  let l1 = head;
  let l2 = head1;

  while (l1 !== null || l2 !== null) {
    let sum = 0 + carry;

    if (l1 != null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 != null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    sum = sum % 10;
    ptr.next = new ListNode(sum);
    ptr = ptr.next;
  }

  if (carry == 1) {
    ptr.next = new ListNode(1);
  }
  return result.next;
}

// Example usage:

const head = new ListNode(9);
head.next = new ListNode(9);
head.next.next = new ListNode(9);
head.next.next.next = new ListNode(8);
head.next.next.next.next = new ListNode(3);

const head1 = new ListNode(9);
head1.next = new ListNode(9);
head1.next.next = new ListNode(9);

console.log("linked list:1");
let current = head;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}

console.log("linked list:2");
let current1 = head1;
while (current1 !== null) {
  console.log(current1.val);
  current1 = current1.next;
}

const add = AddNums(head, head1);

console.log("added linked list:");
let current2 = add;
while (current2 !== null) {
  console.log(current2.val);
  current2 = current2.next;
}
