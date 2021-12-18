import {findTwoNumberSumTarget} from './findTwoNumberSumTarget'

describe('return true if 2 numbers in array equal to target', () => {
    it('returns true as 4 + 4 = 8', () => {
        expect(findTwoNumberSumTarget([1,2,4,4], 8)).toEqual(true);
    })

    it('returns false as no 2 numbers equal to 8 ', () => {
        expect(findTwoNumberSumTarget([1,2,3,4], 8)).toEqual(false);
    })

})