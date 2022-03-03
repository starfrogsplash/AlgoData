import {smallestDifference, smallestDifference2} from './smallestDIfference'

it('smallestDifference', () => {

    const arr1 = [-1, 5, 10, 20, 28, 3]
    const arr2 = [26, 134, 135, 15, 17]

    expect(smallestDifference(arr1, arr2)).toEqual([28, 26])

})


it('smallestDifferenceB', () => {

    const arr1 = [-1, 5, 10, 20, 28, 3]
    const arr2 = [26, 134, 135, 15, 17]

    expect(smallestDifference2(arr1, arr2)).toEqual([28, 26])

})


