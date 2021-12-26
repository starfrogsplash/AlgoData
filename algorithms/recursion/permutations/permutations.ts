

const permutations = (array: number[] ): number[][] => {
    const permutations: any[] = []
    permutationsHelper(array, [], permutations)
    return permutations
}

const permutationsHelper = (array: number[], currentPermutation: number[], permutations: number[][] ) => {
    if(!array.length && currentPermutation.length){
        permutations.push(currentPermutation)
    } else {
        for (let i = 0; i < array.length; i++){
            const removeCurrentNum = array.slice(0, i)
            const remainder = array.slice(i + 1)
            const newArray = [...removeCurrentNum, ...remainder]
            const newPermutation = [...currentPermutation, ...[array[i]]]
            permutationsHelper(newArray, newPermutation, permutations)
        }
    }
} 

// [1,2,3]
// [2,3], [1] => [2,3], [1] []
// [3] , [2] => [3], [2] [1,2]
// [], [3] => [], [3] [123]



//[3]

export {
    permutations
}