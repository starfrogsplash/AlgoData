

const findTwoNumberSumTarget = (arr: number[], target: number) => {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let currentSum = arr[left] + arr[right]
        if (currentSum < target) left++
        if (currentSum > target) right--
        if (currentSum === target) return true
    }

    return false
}

export {
    findTwoNumberSumTarget
}
