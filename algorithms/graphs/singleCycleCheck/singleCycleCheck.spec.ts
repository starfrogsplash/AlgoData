import { isSingleCycle } from './singleCycleCheck'

it('returns true', () => {
    expect(isSingleCycle([2, 3, 1,-4, -4, 2])).toEqual(true)
})