class Node {
    value: string | number
    next: Node | null
    constructor(value: string | number) {
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList {
    head: Node | null
    tail: Node | null
    length: number
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    insert(value: string | number) {
        this.length++;
        const node = new Node(value);
    
        if (this.tail) {
          this.tail.next = node;
          this.tail = node;
          return node;
        }
    
        this.head = this.tail = node;
        return node;
      }

    insertHead(value: string | number) {
        this.length++
        const node = new Node(value)

        if (this.head) {
            node.next = this.head
            this.head = node
            return node
        }

        this.head = this.tail = node
        return node
    }

    removeHead() {
        if (this.head) {
            this.length--
            const removedNode = this.head
            this.head = this.head.next
            return removedNode
        }
        return undefined
    }

    remove() {
        if (this.tail) {
            this.length--

            const tailNode = this.tail

            let currentNode = this.head

            while (currentNode?.next != tailNode) {
                currentNode = currentNode?.next || null
            }
            const beforeTail = currentNode
            this.tail = beforeTail
            this.tail.next = null

            return tailNode
        }
        return undefined
    }

    print() {
        let current = this.head
        while (current) {
            console.log(current)
            current = current.next
        }
    }

    // insert at specific index

    insertIndex(value: string | number, index: number) {
        if (index >= this.length) {
            throw new Error("Insert index out of bounds");
        }

        if (index === 0) {
            return this.insertHead(value);
        }

        this.length++;
        let previousNode = null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode?.next || null;
        }
        const newNode = new Node(value);
        newNode.next = currentNode;
        if (previousNode) previousNode.next = newNode;
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
        let previousNode = null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode?.next || null;
        }
        if (previousNode) previousNode.next = currentNode?.next || null ;
        return currentNode;
    }
}

export {
    SinglyLinkedList
}