type NestedArray = (number|NestedArray)[]

const productSum = (array: NestedArray, multiplier = 1): number => {
    let sum = 0

    for (let element of array){
        if(Array.isArray(element)){
            sum+=productSum(element, multiplier + 1)
        } else {
            sum+=element
        }
    }
    
    return sum * multiplier
}

export {
    productSum
}