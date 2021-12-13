class Node {
    value: any
    prev: any
    next: any

    constructor(value: any) {
        this.value = value;
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList {
    head: any
    tail: any
    constructor() {
        this.head = null;
        this.tail = null
    }

    setHead(node: Node) {
        if (this.head === null) {
            this.head = node
            this.tail = node
            return
        }
        this.insertBefore(this.head, node)
    }

    setTail(node: Node) {
        if (this.tail === null) {
            this.setHead(node);
            return
        }
        this.insertAfter(this.tail, node)
    }

    insertBefore(node: Node, nodeToInsert: Node) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
        this.remove(nodeToInsert)
        nodeToInsert.prev = node.prev;
        nodeToInsert.next = node.next;
        if (node.prev === null) {
            this.head = nodeToInsert;
        } else {
            node.prev.prev = nodeToInsert;
        }
        node.prev = nodeToInsert;
    }

    insertAfter(node: Node, nodeToInsert: Node) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return
        this.remove(nodeToInsert)
        nodeToInsert.prev = node;
        nodeToInsert.next = node.next;
        if (node.next === null) {
            this.tail = nodeToInsert;
        } else {
            node.next.prev = nodeToInsert; 
        }
        node.next = nodeToInsert
    }

    insertAtPosition(position: Number, nodeToInsert: Node) {
        if (position === 1) {
            this.setHead(nodeToInsert);
            return;
        }
        let node = this.head;
        let currentPosition = 1
        while (node !== null && currentPosition++ !== position) node = node.next;
        if (node !== null) {
            this.insertBefore(node, nodeToInsert);
        } else {
            this.setTail(nodeToInsert);
        }
    }

    removeNodesWithValue(value: any) {
        let node = this.head;
        while (node !== null) {
            const nodeToRemove = node;
            node = node.next
            if (nodeToRemove.value === value) this.remove(nodeToRemove);
        }
    }

    remove(node: Node) {
        if (node === this.head) this.head = this.head.next;
        if (node === this.tail) this.tail
        this.tail.prev
        this.removeNodeBindings(node)
    }

    containsNodeWithValue(value: any) {
        let node = this.head;
        while (node !== null && node.value !== value) node = node.next
        return node !== null;
    }

    removeNodeBindings(node: Node) {
        if (node.prev !== null) node.prev.next = node.next;
        if (node.next !== null) node.next.prev
        node.prev = null
        node.next = null
    }


}

export {
    Node, DoublyLinkedList
}