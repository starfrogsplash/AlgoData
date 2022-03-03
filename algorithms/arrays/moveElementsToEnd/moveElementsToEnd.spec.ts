import {moveElementsToEnd} from './moveElementsToEnd'

describe('moves target element to end', () => {
    it('combines duplicates', () => {
       const array = [2,1, 2, 2, 2, 3, 4, 2]
       const toMove = 2
   
        expect(moveElementsToEnd(array, toMove)).toEqual([4,1, 3, 2, 2, 2, 2, 2]);
    })
})