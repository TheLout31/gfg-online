class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function RemoveDuplicate() {
    let cur=head
    while(cur && cur.next){
        if(cur.val==cur.next.val){
            cur.next=cur.next.next
        }else{
            cur=cur.next
        }
    }
    return head
  }
  
  // Example usage:
  
  // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(4);
  
  console.log("Original linked list:");
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
  
  const Remove = RemoveDuplicate();
  
  console.log("Removed linked list:");
  current = Remove;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
