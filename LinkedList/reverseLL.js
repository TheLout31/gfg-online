class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
    
  }
}
class LL {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addFirst(data) {
    this.size++
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(data) {
    this.size++
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let currNode = this.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    currNode.next = newNode;
  }

  deleteFirst() {
    
    if (this.head == null) {
      console.log("LL is empty");
      return;
    }
    
    this.head = this.head.next;
    this.size--;
  }

  deleteLast() {
    if (this.head == null) {
      console.log("LL is empty");
      return;
    }

    if (this.head.next == null) {
      this.head = null;
      return;
    }
    
    let secondNode = this.head;
    let lastNode = this.head.next;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
      secondNode = secondNode.next;
    }
    secondNode.next = null;
    this.size--;
  }

  printLL() {
    let currNode = this.head;
    while (currNode !== null) {
      console.log(currNode.data + "-->");
      currNode = currNode.next;
    }
    console.log("NULL");
  }

  reverseIterative() {
    if (this.head == null || this.head.next == null) {
      return;
    }
    let prevNode = null;
    let currNode = this.head;
    let nextNode = null;
    while (currNode !== null) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      //update
      prevNode = currNode;
      currNode = nextNode;
    }
    this.head = prevNode;
    return prevNode;
  }

  reverseRecursive() {
    if (this.head == null || this.head.next == null) {
      return this.head;
    }
    let newHead = this.reverseRecursive(this.head.next);
    this.head.next.next = this.head;
    this.head.next = null;
    return newHead;
  }
}

let newLL = new LL();

newLL.addLast(3);
newLL.addFirst(2);
newLL.addFirst(1);
newLL.printLL();

newLL.reverseRecursive();
newLL.printLL();
