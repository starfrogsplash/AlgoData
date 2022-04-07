
const findTwoNumberSumTarget = (arr: number[], target: number) => {
    const sortedArr = arr.sort()
    let left = 0
    let right = sortedArr.length - 1

    while (left < right) {
        const currentSum = sortedArr[left] + sortedArr[right]
        if (currentSum < target) left++
        if (currentSum > target) right--
        if (currentSum === target) return true
    }

    return false
}

// console.log(findTwoNumberSumTarget([1,2,4,4], 8))

export {
    findTwoNumberSumTarget
}
