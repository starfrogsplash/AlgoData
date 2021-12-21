import { DoublyLinkedList } from "./DoublyLinkedList";

it('constructs a doubly linkedList', () => {
  // Testing functions
  
  const dLinkedList = new DoublyLinkedList();
  
  dLinkedList.insert(7);
  dLinkedList.insert(8);
  dLinkedList.insert(9);


    // expect(dLinkedList.head.value).toEqual(2)
    // expect(dLinkedList.tail.value).toEqual(3)
})