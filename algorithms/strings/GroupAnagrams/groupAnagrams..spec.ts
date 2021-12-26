import { groupAnagrams } from './groupAnagrams'

describe('function should group anagrams in arrays', () => {
    it('returns grouped anagrams', () => {

        const input = ["yo", "act", "flop", "tac", "cat", "oy", "olfp"]
        const result = [["yo", "oy"], ["act", "tac", "cat"], ["flop", "olfp"]]
        expect(groupAnagrams(input)).toEqual(result);

    })
})

