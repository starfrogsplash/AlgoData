import { MinMaxStack } from "../MinMaxStack";

it('returns max value, and inserts stack correctly', ()=> {
    const minMaxStack =  new MinMaxStack()

    minMaxStack.push(5)
    minMaxStack.push(10)
    minMaxStack.push(15)

    expect(minMaxStack.stack).toEqual([5,10,15])
    expect(minMaxStack.getMin()).toEqual(5)
    expect(minMaxStack.getMax()).toEqual(15)
})
