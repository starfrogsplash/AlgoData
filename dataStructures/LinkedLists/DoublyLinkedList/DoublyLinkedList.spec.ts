import { Node, DoublyLinkedList } from "./DoublyLinkedList";

it('constructs a doubly linkedList', () => {
    const dLinkedList = new DoublyLinkedList()

    const node1 = new Node(1)
    const node2 = new Node(2)
    const node3 = new Node(3)

    dLinkedList.setHead(node1)
    dLinkedList.setHead(node2)
    dLinkedList.setTail(node3)

    expect(dLinkedList.head.value).toEqual(2)
    expect(dLinkedList.tail.value).toEqual(3)
})