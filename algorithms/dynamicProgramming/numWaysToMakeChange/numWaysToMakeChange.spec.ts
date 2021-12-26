import {numWaysToMakeChange} from './numWaysToMakeChange'

describe('numWaysToMakeChange', () => {
    it('returns 2', () => {
        expect(numWaysToMakeChange(6, [1,5])).toEqual(2);
    })

    it('returns 4', () => {
         expect(numWaysToMakeChange(10, [1,5,10])).toEqual(4);
     })


})