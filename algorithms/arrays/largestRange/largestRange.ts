//O(logn) time | O(n)

const largestRangeA = (array: number[]) => {
    array.sort((a, b) => a - b )
    let maxRange = 0
    let first, last = null
    let rangeSofar = [array[0]]

    for (let i = 0; i< array.length; i++){
        const current = array[i]
        const lastInRange = rangeSofar[rangeSofar.length - 1]
        const lengthRangeSofar = rangeSofar.length

        if((current-1) === lastInRange){
            rangeSofar.push(current)
        }else if (maxRange < lengthRangeSofar){
            maxRange = lengthRangeSofar
            first = rangeSofar[0]
            last = lastInRange
            if(lengthRangeSofar > (array.length - i)) break
            rangeSofar = [current]
        }
    }

    return [first, last]
}

// O(n) time | O(n) space 
const largestRangeB = (array: number[]) => {
    array.sort((a, b) => a - b )
    const allRanges: number[][] = []
    let currentRange: number[] = []
    let biggest: number[] = []

    for (let i = 0; i< array.length; i++){
        const current = array[i]
        const lastInRange = currentRange[currentRange.length - 1]

        if(current-1 === lastInRange || i === 0){
            currentRange.push(current)
        } else {
            allRanges.push(currentRange)
            currentRange = [current]
        }
    }

    for(const arr of allRanges){
        if(arr.length > biggest.length ){
            biggest = arr
        }
    }

    return [biggest[0], biggest[biggest.length -1]]
}

// O(n) time | 0(n) space
const largestRangeC = (array: number[]) => {
    let bestRange: number[] = []
    let longestLength = 0
    const nums: Record<number, boolean> = {}

    for(const num of array){
        nums[num] = true
    }

    for (const num of array){
        if(!nums[num]) continue
        nums[num] = false
        let currentLength = 1
        let left = num - 1
        let right = num + 1
        while (left in nums){
            nums[left] = false
            currentLength++
            left--
        }
        while (right in nums){
            nums[right] = false
            currentLength++
            right++
        }
        if(currentLength > longestLength){
            longestLength = currentLength
            bestRange = [left + 1, right - 1]
        }
    }
    return bestRange
}

export {
    largestRangeA,
    largestRangeB,
    largestRangeC
}