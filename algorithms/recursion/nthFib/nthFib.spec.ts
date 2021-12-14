import {nthFibRec, iterativeFib} from './nthFib'


it('recursive returns 2', () => {
    expect(nthFibRec(5)).toEqual(3)
})

it('iterative returns 2', () => {
    expect(iterativeFib(5)).toEqual(3)
})