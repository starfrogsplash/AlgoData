const smallestSubArrayGivenSum = (arr: number[], s: number) => {
    let windowSum = 0
    let minLength  = Infinity
    let windowStart = 0
    let numbers: number[] = []

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum+=arr[windowEnd]
        while (windowSum >= s){
            const newMinLength =( windowEnd - windowStart) + 1
            // [0,0,1,1,1,0,0] start=2, end=4, therefore, the calculation needs to be: end - start + 1 .... 4 - 2 + 1 | [0,0,1,0,0] start = 2, end = 2, therefore 2 - 2 + 1
            if (newMinLength < minLength) {
                minLength = newMinLength
                numbers = [...arr.slice(windowStart, windowEnd + 1)]
            }
            windowSum -= arr[windowStart]
            windowStart++
        }
    }

    if(minLength === Infinity) return 0
    console.log('minLength==', minLength)

    console.log('numbers==', numbers)
    return numbers
}

export {
    smallestSubArrayGivenSum
}