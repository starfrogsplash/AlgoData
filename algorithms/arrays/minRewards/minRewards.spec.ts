import {minRewards} from './minRewards'

describe('returns min reward', () => {
    it('25 // you would give out the following rewards: [4, 3, 2, 1, 2, 3, 4, 5, 1', () => {
        expect(minRewards([8,4,2,1,3,6,7,9,5])).toEqual(25);
    })

})