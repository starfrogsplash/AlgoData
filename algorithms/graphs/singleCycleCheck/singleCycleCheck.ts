
const isSingleCycle = (array: number[]) => {
    let numElementsVisited = 0;
    let currentIdx = 0;
    while (numElementsVisited < array.length) {
        if (numElementsVisited > 0 && currentIdx === 0) return false;
        numElementsVisited++
        currentIdx = getNextIdx(currentIdx, array);
    }
    return currentIdx === 0;
}

const getNextIdx = (currentIdx: number, array: number[]) => {
    const jump = array[currentIdx]
    const nextIdx = (currentIdx + jump) % array.length;
    return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}


export {
    isSingleCycle
}