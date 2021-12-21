const riverSizes = (matrix: number[][]): number[] => {
    const sizes: number[] = []
    const visited = matrix.map(curRowIdx => curRowIdx.map(value => false))
    for (let curRowIdx = 0; curRowIdx < matrix.length; curRowIdx++) {
        for (let curColidx = 0; curColidx < matrix[curRowIdx].length; curColidx++) {
            if (visited[curRowIdx][curColidx]) continue
            traverseNode(curRowIdx, curColidx, matrix, visited, sizes)
        }
    }
    return sizes
}

const traverseNode = (curRowIdx: number, curColidx: number, matrix: number[][], visited: boolean[][], sizes: number[]) => {
    let currentRiverSize = 0;
    const nodesToExplore = [[curRowIdx, curColidx]]

    while (nodesToExplore.length) {
        const currentNode = nodesToExplore.pop()
        curRowIdx = currentNode ? currentNode[0] : -1
        curColidx = currentNode ? currentNode[1] : -1
        if (visited[curRowIdx][curColidx]) continue
        visited[curRowIdx][curColidx] = true;
        if (matrix[curRowIdx][curColidx] === 0) continue;
        currentRiverSize++
        const unvisitedNeighbors = getUnvistedNeighbours(curRowIdx, curColidx, matrix, visited)
        for (const neighbor of unvisitedNeighbors) {
            nodesToExplore.push(neighbor)
        }
    }

    if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

const getUnvistedNeighbours = (curRowIdx: number, curColidx: number, matrix: number[][], visited: boolean[][]) => {
    const unvistedNeighbours: number[][] = []
    const above = [curRowIdx - 1, curColidx]
    const below = [curRowIdx + 1, curColidx]
    const right = [curRowIdx, curColidx + 1]
    const left = [curRowIdx, curColidx - 1]
    const visitedAbove = visited[curRowIdx - 1] ? visited[curRowIdx - 1][curColidx] : undefined
    const visitedBelow = visited[curRowIdx + 1] ? visited[curRowIdx + 1][curColidx] : undefined
    const visitedLeft = visited[curRowIdx][curColidx - 1]
    const visitedRight = visited[curRowIdx][curColidx + 1]

    if (curRowIdx > 0 && !visitedAbove) unvistedNeighbours.push(above)
    if (curRowIdx < matrix.length - 1 && !visitedBelow) unvistedNeighbours.push(below)
    if (curColidx > 0 && !visitedLeft) unvistedNeighbours.push(left)
    if (curColidx < matrix[0].length - 1 && !visitedRight) unvistedNeighbours.push(right)
    return unvistedNeighbours
}

export {
    riverSizes
}