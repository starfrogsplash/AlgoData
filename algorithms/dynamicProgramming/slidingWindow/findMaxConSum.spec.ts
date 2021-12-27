import {findMaxConSumA, findMaxConSumB} from './findMaxConSum'


describe('findMaxConSum', () =>{


    it('returns ', () => {

        expect(findMaxConSumA([1,4,3,6,12], 3)).toEqual(21)
        expect(findMaxConSumB([1,4,3,6,12], 3)).toEqual(21)
    })
})