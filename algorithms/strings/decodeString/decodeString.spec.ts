import { decodeString } from './decodeString'


describe('decodes string', () => {
    //elements in arrays are summed together, then  multiplied by their level of depth inside the main array
    fit('returns accaccacc', () => {
        expect(decodeString("3[a2[c]]")).toEqual('accaccacc');

    })

})

