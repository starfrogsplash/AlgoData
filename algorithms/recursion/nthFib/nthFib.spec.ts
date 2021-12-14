import {nthFibRec, iterativeFib} from './nthFib'


it('recursive returns 2', () => {
    expect(nthFibRec(4)).toEqual(2)
})

it('iterative returns 2', () => {
    expect(iterativeFib(4)).toEqual(2)
})