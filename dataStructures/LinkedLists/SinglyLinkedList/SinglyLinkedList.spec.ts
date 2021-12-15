import { SinglyLinkedList } from './SinglyLinkedList'


it('returns correct values for SinglyLinkedList', () => {

    const linkedList = new SinglyLinkedList();

    linkedList.insert(7);
    linkedList.insert(8);
    linkedList.insertHead(9)


    expect(linkedList.head?.value).toEqual(9)
    expect(linkedList.tail?.value).toEqual(8)


})