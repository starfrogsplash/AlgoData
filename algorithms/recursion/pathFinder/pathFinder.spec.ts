import { pathFinder } from './pathFinder'


describe('returns the path for the target value in string format', () => {

    it('returns the prefix path for target value', () => {
        expect(pathFinder({ a: { b: "c" } }, 'c')).toEqual('a.b.c');
    })
    
    it('returns the prefix path for target value in correct depth', () => {
        expect(pathFinder({ a: { b: "c" }, d: { e: "f" }, g: { h: "i" },}, 'f')).toEqual('d.e.f');
    })
    
})





