import { productSum } from './productSum'


describe('returns the the sum of array containing special arrays', () => {

    //elements in arrays are summed together, then  multiplied by their level of depth inside the main array

    it('returns the prefix path for target 29', () => {
        expect(productSum([5,2,[7, 3],2])).toEqual(29);

    })

    it('returns the prefix path for target value of 12', () => {
        expect(productSum([5,2,[7, -1],3,[6,[-13,8], 4]])).toEqual(12);
    })
        
})





