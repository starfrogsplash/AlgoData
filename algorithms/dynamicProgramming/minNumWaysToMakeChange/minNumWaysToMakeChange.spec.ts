import {minNumWaysToMakeChange} from './minNumWaysToMakeChange'

fdescribe('minNumWaysToMakeChange', () => {
    fit('returns 3', () => {
        expect(minNumWaysToMakeChange(7, [1,5,10])).toEqual(3);
    })

    fit('returns 2', () => {
        expect(minNumWaysToMakeChange(6, [1,2,4])).toEqual(2);
    })



})