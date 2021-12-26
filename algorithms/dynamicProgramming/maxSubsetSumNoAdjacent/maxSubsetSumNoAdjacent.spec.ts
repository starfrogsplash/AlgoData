import {maxSubsetSumNoAdjacent} from './maxSubsetSumNoAdjacent'

describe('returns maximum sun of non-adjacent elem in array', () => {
    it('returns 330', () => {
       // 330 => 75, 120, 135
        expect(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])).toEqual(330);
    })

    it('returns 285', () => {

    // 195 => 75, 120, 90
        expect(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, -135])).toEqual(285);
    })


    it('returns -1', () => {
        expect(maxSubsetSumNoAdjacent([-1, -10, -10, -1, -2])).toEqual(-1);
    })
})