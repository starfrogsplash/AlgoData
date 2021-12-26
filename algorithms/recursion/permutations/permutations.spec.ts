import { permutations } from './permutations'


describe('returns permutations of a given array', () => {

    //elements in arrays are summed together, then  multiplied by their level of depth inside the main array

    it('returns all permutations of a given array', () => {
        expect(permutations([1, 2])).toEqual([[1, 2], [2, 1]]);

    })

    fit('returns all permutations of a given array', () => {
        expect(permutations([1, 2, 3])).toEqual([[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]);

    })


})





