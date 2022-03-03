//O(n2)
const smallestDifference = (arr1: number[], arr2: number[]) => {
    let pair: number[] = []
    let smallestDiffSoFar = Infinity

    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length;j++){
            const differenceSoFar = Math.abs(arr1[i] - arr2[j])
            if(differenceSoFar < smallestDiffSoFar){
                smallestDiffSoFar = differenceSoFar
                pair = [arr1[i], arr2[j]]
            }
        }
    }

    return pair
}

//0(nlog(n)) + (mlog(m)) time | 0(1) space
const smallestDifference2 = (arr1: number[], arr2: number[]) => {
    arr1.sort((a, b) => a - b)
    arr2.sort((a, b) => a - b)
    let oneIdx = 0
   let twoIdx = 0
   let smallest = Infinity
   let currentSoFar = Infinity
   let smallestPair: number[] = []

   while(oneIdx < arr1.length && twoIdx < arr2.length){
        const firstNum = arr1[oneIdx]
        const secondNum = arr2[twoIdx]

        currentSoFar = Math.abs(secondNum - firstNum)

        if(firstNum < secondNum){
            // currentSoFar = secondNum - firstNum
            oneIdx++
        } else if (secondNum < firstNum){
            // currentSoFar = firstNum - secondNum
            twoIdx++
        } else {
            return [firstNum, secondNum]
        }

        if(smallest > currentSoFar){
            smallest = currentSoFar
            smallestPair = [firstNum, secondNum]
        }
   }

   return smallestPair

}


export {
    smallestDifference,
    smallestDifference2
}