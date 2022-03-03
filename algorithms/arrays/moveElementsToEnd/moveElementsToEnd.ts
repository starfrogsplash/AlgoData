
const moveElementsToEnd = (array:number[], toMove: number) => {

    let left = 0
    let right = array.length - 1

    while(left < right){
       while (left < right && array[right] === toMove) right--
       if(toMove === array[left]) [array[left], array[right]] = [array[right], array[left]]
       left++
    }

   // console.log('array==', array)
    return array
}

export {
    moveElementsToEnd
}