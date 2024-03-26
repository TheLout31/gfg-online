class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function Palindrome(head) {
  let reverseList = (head) => {
    let prev = null;
    while (head !== null) {
      let nextNode = head.next;
      head.next = prev;
      prev = head;
      head = nextNode;
    }
    return prev;
  };

  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  fast = head;
  slow = reverseList(slow);

  while (slow !== null) {
    if (slow.val !== fast.val) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }

  return true;
}
function PalindromeEasy(head) {
  let arr = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}
// Example usage:

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(1);

console.log("Original linked list:");
let current = head;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}

const Remove = PalindromeEasy(head);
console.log(Remove);
//   console.log("Removed linked list:");
//   current = Remove;
//   while (current !== null) {
//     console.log(current.val);
//     current = current.next;
//   }
