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
    let newNode = new Node(data);
    this.size++;
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(data) {
    let newNode = new Node(data);
    this.size++;
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
    this.size--;
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
  }

  FindMiddle() {
    let firstPointer = this.head;
    let secondPointer = this.head;

    while (secondPointer !== null && secondPointer.next !== null) {
      firstPointer = firstPointer.next;
      secondPointer = secondPointer.next.next;
    }

    while (firstPointer !== null) {
      console.log(firstPointer.data + "-->");
      firstPointer = firstPointer.next;
    }
    console.log("NULL");
  }

  

  printLL() {
    let currNode = this.head;
    while (currNode !== null) {
      console.log(currNode.data + "-->");
      currNode = currNode.next;
    }
    console.log("NULL");
  }

  getSize() {
    return this.size;
  }
}

let newLL = new LL();
newLL.addLast(3);
newLL.addLast(4);
newLL.addLast(3);
newLL.addFirst(2);
newLL.addFirst(1);
newLL.printLL();


