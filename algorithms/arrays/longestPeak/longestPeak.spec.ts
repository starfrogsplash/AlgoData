import { longestPeak } from "./longestPeak";


it('returns longestPeak which is 6 based on 0, 10, 6, 5,-1, -3', ()=> {

    const array = [1, 2, 3, 3, 4, 0, 10, 6, 5,-1, -3, 2, 3]
    expect(longestPeak(array)).toEqual(6)
})

