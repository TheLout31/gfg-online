class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function RemoveSame(val) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let curr = dummy;
    while (curr.next !== null) {
      if (curr.next.val == val) {
        curr.next = curr.next.next;
      } else {
        curr = curr.next;
      }
    }
    return dummy.next;
  }
  
  // Example usage:
  
  // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(3);
  
  console.log("Original linked list:");
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
  
  const Remove = RemoveSame(3);
  
  console.log("Reversed linked list:");
  current = Remove;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
  