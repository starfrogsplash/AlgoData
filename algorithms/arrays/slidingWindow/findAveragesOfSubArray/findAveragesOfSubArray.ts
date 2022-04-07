

const findAverageOfSubArray = (arr: number[], k: number) => {
    const averages:number[] = []
    
    for (let i = 0; i <= arr.length - k; i++){
        let sum = 0
        for (let j = i; j < i + k; j++){
            sum+=arr[j]
        }
        averages.push(sum / k)
        sum = 0
    }

    return averages
}

const findAverageOfSubArrayB = (arr: number[], k: number) => {
    const averages:number[] = []
    let windowSum = 0
    let windowStart = 0

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum += arr[windowEnd]

        if(windowEnd >= (k-1)){
            averages.push(windowSum / k)
            windowSum -= arr[windowStart]
            windowStart++
        }

    }

    return averages

}

export {
    findAverageOfSubArray,
    findAverageOfSubArrayB
}