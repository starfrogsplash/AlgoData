
const validSubsequence = (array: number[], seq: number[]) => {
    let seqIdx = 0

    for (const value of array){
        if(seqIdx === seq.length) return true
        if(seq[seqIdx] === value) seqIdx++
    }

    return true
}

const validSubsequenceB = (array: number[], seq: number[]) => {
    let arrIdx = 0
    let seqIdx = 0

    while (array.length === arrIdx && seq.length === seqIdx){
        if(array[arrIdx] === seq[seqIdx]) seqIdx++
        arrIdx++
    }

    return arrIdx === seqIdx
}

export {
    validSubsequence,
    validSubsequenceB
}