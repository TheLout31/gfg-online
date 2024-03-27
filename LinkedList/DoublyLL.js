class Node {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head == null;
  }

  addToHead(val) {
    const newNode = new Node(val);

    if (this.isEmpty) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  addFromTail(val) {
    const newNode = new Node(val);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  deleteFromHead() {
    if (this.isEmpty()) {
      return null;
    }
    const removeData = this.head;
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return removeData;
  }

  removeFromTail() {
    if (this.isEmpty()) {
        return null;
    }
    const removedData = this.tail.data;
    if (this.size === 1) {
        this.head = null;
        this.tail = null;
    } else {
        this.tail = this.tail.previous;
        this.tail.next = null;
    }
    this.size--;
    return removedData;
}

  display() {
    let currNode = this.head;
    process.stdout.write("NULL ");
    while (currNode !== null) {
      process.stdout.write(" <-" + currNode.val + "-> ");
      currNode = currNode.next;
    }
    process.stdout.write(" NULL");
  }
}

let newDLL = new DLL();

newDLL.addFromTail(1);
newDLL.addFromTail(2);
newDLL.addFromTail(3);
newDLL.deleteFromHead()
newDLL.display();
