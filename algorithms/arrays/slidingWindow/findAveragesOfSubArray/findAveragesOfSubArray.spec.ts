import { findAverageOfSubArray, findAverageOfSubArrayB } from "./findAveragesOfSubArray";


it('returns average', () => {

expect(findAverageOfSubArray([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)).toEqual([2.2, 2.8, 2.4, 3.6, 2.8])
})

it('returns average optimised', () => {

    expect(findAverageOfSubArrayB([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)).toEqual([2.2, 2.8, 2.4, 3.6, 2.8])
    })