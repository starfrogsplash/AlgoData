import {validSubsequence, validSubsequenceB} from './validSubsequence'

describe('validSubsequence ', () => {
    it('returns true for value sequence found in input array', () => {

        const input = [5, 1, 22, 25,6,-1, 8, 101]
        const sequence = [1, 6, -1, 101]
        expect(validSubsequence(input, sequence)).toEqual(true);
        expect(validSubsequenceB(input, sequence)).toEqual(true);
    })
})