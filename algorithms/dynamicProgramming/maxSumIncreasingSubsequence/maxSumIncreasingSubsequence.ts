/* eslint-disable no-unused-vars */
/* eslint-disable  @typescript-eslint/no-unused-vars */
const maxSumIncreasingSubsequence = (array: number[]) => {

    const maxSofar = 0
    const currentSub: number[] = [array[0]]

    for(let i = 0; i < array.length; i++){

        if(array[i] > array[i -1] ){
            currentSub.push(array[i] + currentSub[i -1])
        }

        if(!currentSub[i]) currentSub[i] = currentSub[i -1]

    }


    return currentSub

}


export {
    maxSumIncreasingSubsequence
}