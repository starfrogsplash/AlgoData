import {minNumWaysToMakeChange} from './minNumWaysToMakeChange'

describe('minNumWaysToMakeChange', () => {
    it('returns 3', () => {
        expect(minNumWaysToMakeChange(7, [1,5,10])).toEqual(3);
    })

    it('returns 2', () => {
        expect(minNumWaysToMakeChange(6, [1,2,4])).toEqual(2);
    })



})