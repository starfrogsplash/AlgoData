import {riverSizes} from './riverSizes'



fit('returns river sizes', () => {

    const matrix = [
        [1,0,0,1,0],
        [1,0,1,0,0],
        [0,0,1,0,1],
        [1,0,1,0,1],
        [1,0,1,1,0],
    ]

    expect(riverSizes(matrix).sort((a, b) => a - b)).toEqual([1,2,2,2,5])
})