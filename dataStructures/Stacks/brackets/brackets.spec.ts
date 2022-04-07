import { isValidBrackets } from "./brackets";

xit('returnes true', () => {
    expect(isValidBrackets('()')).toEqual(true)
})

it('returnes false', () => {
    expect(isValidBrackets('()}')).toEqual(false)
})

it('returnes true', () => {
    expect(isValidBrackets('([])(){}(())()()')).toEqual(true)
})
