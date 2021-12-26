import { caesarCipher } from './caesarCipher'


describe('shifts letters by k', () => {
    //elements in arrays are summed together, then  multiplied by their level of depth inside the main array
    it('returns zab', () => {
        expect(caesarCipher('xyz', 2)).toEqual('zab');

    })

    fit('returns ZAB', () => {
        expect(caesarCipher('XYZ', 2)).toEqual('ZAB');

    })
})

