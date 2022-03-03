
const apartmentHunting = (blocks: Record<string, boolean>[], reqs: string[]) => {
    const maxDistanceAtBlocks = new Array(blocks.length).fill(-Infinity)
    for (let i = 0; i < blocks.length; i++) {
        for (const req of reqs) {
            let closestReqDistance = Infinity
            for (let j = 0; j < blocks.length; j++) {
                if (blocks[j][req]) {
                    const distanceBetween = Math.abs(i - j)
                    closestReqDistance = Math.min(closestReqDistance, distanceBetween)
                }
            }
            maxDistanceAtBlocks[i] = Math.max(maxDistanceAtBlocks[i], closestReqDistance)
        }
    }
    return getIdxAtMinValue(maxDistanceAtBlocks)
}

const getIdxAtMinValue = (array: number[]) => {
    let idxAtMinValue = 0
    let minValue = Infinity
    for (let i = 0; i < array.length; i++){
        const currentValue = array[i]
        if(currentValue < minValue){
            minValue = currentValue
            idxAtMinValue = i
        }
    }

    return idxAtMinValue
}



const apartmentHuntingB = (blocks: Record<string, boolean>[], reqs: string[]) => {
    const minDistancesFromBlocks = reqs.map(req => getMinDistances(blocks, req))
   const minDistancesAtBlocks = getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks)

    return getIdxAtMinValue(minDistancesAtBlocks)
}

const getMinDistances = (blocks: Record<string, boolean>[], req: string) => {
    const minDistances = new Array(blocks.length)
    let closestReqIdx = Infinity
    for( let i = 0; i < blocks.length; i++){
        if(blocks[i][req]) closestReqIdx = i
        const distanceBetween = Math.abs(i - closestReqIdx)
        minDistances[i] = distanceBetween
    }
    for(let i = blocks.length - 1; i >=0; i--){
        if (blocks[i][req]) closestReqIdx = i
        const distanceBetween = Math.abs(i - closestReqIdx)
        minDistances[i] =  Math.min(minDistances[i], distanceBetween)
    }
    return minDistances
}


const getMaxDistancesAtBlocks = (blocks: Record<string, boolean>[], minDistancesFromBlocks: number[][]) => {
    const maxDistanceAtBlocks = new Array(blocks.length)
    for( let i = 0; i < blocks.length; i++){
        const minDistancesAtBlock = minDistancesFromBlocks.map( distances => distances[i])
        maxDistanceAtBlocks[i] = Math.max(...minDistancesAtBlock)
    }
    return maxDistanceAtBlocks
}

export {
    apartmentHunting,
    apartmentHuntingB
}