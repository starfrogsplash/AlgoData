/*
formula - max subarray

initial  2 variables storing the first number which acts as our base case (maxEndingHere, maxSoFar)

for each iteration check which number (subArray) is bigger, the currentNumber or the (previous Number + current Number)
store that in a variable (maxEndingHere)

then check which number is bigger maxEndingHere or maxSoFar, 
*/


const kadanesAlgorithm = (array: number[]) => {
    let maxEndingHere = array[0]
    let maxSoFar = array[0]

    for(let i = 1; i < array.length; i++){
        const currentNum = array[i]
        maxEndingHere = Math.max(currentNum, maxEndingHere + currentNum)
        maxSoFar = Math.max(maxSoFar, maxEndingHere)
    }

    return maxSoFar
}




export {
    kadanesAlgorithm
}