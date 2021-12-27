import { LongestSubstringWithoutDup, longestSubstring } from './LongestSubstringWithoutDup'


describe('returns longest substring', () => {
    //elements in arrays are summed together, then  multiplied by their level of depth inside the main array
    it('returns ab', () => {
        expect(LongestSubstringWithoutDup('aba')).toEqual('ab');

    })
    it('returns mentisac', () => {
        expect(LongestSubstringWithoutDup('clementisacap')).toEqual('mentisac');

    })

    it('returns ab2', () => {
        expect(longestSubstring('aba')).toEqual('ab');

    })

    it('returns mentisac2', () => {
        expect(longestSubstring('clementisacap')).toEqual('mentisac');

    })
})

