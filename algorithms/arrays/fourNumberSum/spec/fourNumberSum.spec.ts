import { fourNumberSum } from "../fourNumberSum";


it('returns correct data', ()=> {

    const result = fourNumberSum([7, 6, 4, -1, 1, 2], 16)
    expect(result).toEqual([[7, 6, 4, -1], [7, 6, 1, 2]])
})

