import { largestRangeA, largestRangeB, largestRangeC } from "./largestRange";

it('returns longestPeak A', ()=> {
    const array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
    expect(largestRangeA(array)).toEqual([0,7])
})

it('returns longestPeak B', ()=> {

    const array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
    expect(largestRangeB(array)).toEqual([0,7])
})

it('returns longestPeakC = 0-7', ()=> {

    const array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
    expect(largestRangeC(array)).toEqual([0,7])
})

