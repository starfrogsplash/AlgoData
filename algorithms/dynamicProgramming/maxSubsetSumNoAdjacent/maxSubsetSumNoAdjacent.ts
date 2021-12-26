
const maxSubsetSumNoAdjacent = (array: number[]): number => {
    if (!array.length) return 0
    if (array.length === 1) return 0

    //75, 105, 120, 75, 90, 135
    const maxSums = []
    maxSums.push(array[0], Math.max(array[0], array[1]))

    for (let i = 2; i < array.length; i++){
        maxSums[i] = Math.max(maxSums[i-1], array[i] + maxSums[i-2])
    }

    return maxSums[maxSums.length-1]
}


export {
    maxSubsetSumNoAdjacent
}