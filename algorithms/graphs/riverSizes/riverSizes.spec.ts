import {riverSizes} from './riverSizes'



it('returns 2 rivers of length 2 & 3', () => {

    const matrix = [
        [1,0,0,1,0],
        [1,0,1,1,0],
    ]

    expect(riverSizes(matrix).sort((a, b) => a - b)).toEqual([2,3])
})


it('returns 5 rivers of length 1,2,2,2,5', () => {

    const matrix = [
        [1,0,0,1,0],
        [1,0,1,0,0],
        [0,0,1,0,1],
        [1,0,1,0,1],
        [1,0,1,1,0],
    ]

    expect(riverSizes(matrix).sort((a, b) => a - b)).toEqual([1,2,2,2,5])
})