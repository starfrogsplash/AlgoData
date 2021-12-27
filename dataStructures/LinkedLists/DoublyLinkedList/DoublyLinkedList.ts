class Node {
    next: null
    previous: null
    value: string | number
    constructor(value: string | number) {
      // eslint-disable-next-line no-self-assign
      this.value = value,
      this.next = null,
      this.previous =null
    }
  }
  
  class DoublyLinkedList {
      head: any
      tail: any
      length : number
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    insert(value: string | number) {
      this.length++;
      const newNode = new Node(value);
  
      if (this.tail) {
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        return newNode;
      }
  
      this.head = this.tail = newNode;
      return newNode;
    }
  
    remove() {
      if (this.tail) {
        this.length--;
  
        const removedTail = this.tail;
        const beforeTail = this.tail.previous;
  
        this.tail = beforeTail;
        if (this.tail) {
          this.tail.next = null;
        } else {
          this.head = null;
        }
  
        return removedTail;
      }
      return undefined;
    }
  
    print() {
      let current = this.head;
      while (current) {
        console.log(
          `${current.previous?.value} ${current.value} ${current.next?.value}`
        );
        current = current.next;
      }
    }
  
    // Insert node from the head instead of the tail
  
    insertHead(value: number) {
      this.length++;
      const newNode = new Node(value);
  
      if (this.head) {
        this.head.previous = newNode;
        newNode.next = this.head;
        this.head = newNode;
        return newNode;
      }
  
      this.head = this.tail = newNode;
      return newNode;
    }
  
    // Remove node from the head instead of the tail
    removeHead() {
      if (this.head) {
        this.length--;
        const removedHead = this.head;
        this.head = this.head.next;
        if (this.head) {
          this.head.previous = null;
        } else {
          this.tail = null;
        }
        return removedHead;
      }
      return undefined;
    }
  
    // insert at specific index
  
    insertIndex(value: number, index: number) {
      if (index >= this.length) {
        throw new Error("Insert index out of bounds");
      }
  
      if (index === 0) {
        return this.insertHead(value);
      }
  
      this.length++;
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      const previousNode = currentNode.previous;
      const newNode = new Node(value);
      newNode.next = currentNode;
      newNode.previous = previousNode;
      previousNode.next = newNode;
      currentNode.previous = newNode;
      return newNode;
    }
  
    // remove at specific index
  
    removeIndex(index: number) {
      if (index >= this.length) {
        throw new Error("Remove index out of bounds");
      }
  
      if (index === 0) {
        return this.removeHead();
      }
  
      this.length--;
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      const previousNode = currentNode.previous;
      const nextNode = currentNode.next;
      previousNode.next = nextNode;
      nextNode.previous = previousNode;
      return currentNode;
    }
  }
  


export {
     DoublyLinkedList
}