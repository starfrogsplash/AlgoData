
const threeNumberSum = (array: number[], target: number) => {
    array.sort()
    const numbers = []
   
    for(let i = 0; i < array.length - 2; i++){
        let left = i+1
        let right = array.length -1

        while (left < right){
            const currentSum =  array[i] + array[left] + array[right]

            if(currentSum < target){
                left++
            } else if (currentSum > target){
                right--
            } else if (currentSum === target){
                numbers.push([ array[i], array[left], array[right]])
                left++
                right--
            }
        }
    }


    return numbers
}



export {
    threeNumberSum
}