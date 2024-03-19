class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
    this.size++;
  }
}
class LL {
  constructor() {   
    this.head = null;
    this.size = 0;
  }

  addFirst(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(data) {
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
    this.size--;
    this.head = this.head.next;
    
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
    this.size--;
    let secondNode = this.head;
    let lastNode = this.head.next;
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
      secondNode = secondNode.next;
    }
    secondNode.next = null;
    
  }

  printLL() {
    let currNode = this.head;
    while (currNode !== null) {
      console.log(currNode.data + "-->");
      currNode = currNode.next;
    }
    console.log("NULL");
    console.log(this.size);
  }
}

let newLL = new LL();

newLL.addLast(3);
newLL.addFirst(2);
newLL.addFirst(1);
newLL.deleteLast();
newLL.printLL();
