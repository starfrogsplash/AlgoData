
const threeNumberSum = (array: number[], target: number) => {
    array.sort()
    const numbers = []

    for(let i = 0; i < array.length - 2 ; i++){

    let start = i + 1
    let end = array.length - 1

        while (start < end) {
            const currentSum = array[i] + array[start] + array[end]
            if(currentSum === target){
                numbers.push([array[i],array[start],array[end]])
                start++
                end--
            } else if (currentSum < target){
                start++
            } else if (currentSum > target){
                end--
            }
        }
    }

    return numbers
}



export {
    threeNumberSum
}