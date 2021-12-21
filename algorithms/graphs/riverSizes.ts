const riverSizes = (matrix: number[][]): number[] => {
    const sizes: number[] = []
    const visited = matrix.map(currentRow => currentRow.map(value => false))
    for (let currentRow = 0; currentRow < matrix.length; currentRow++) {
        for (let currentCol = 0; currentCol < matrix[currentRow].length; currentCol++) {
            if (visited[currentRow][currentCol]) continue
            traverseNode(currentRow, currentCol, matrix, visited, sizes)
        }
    }
    return sizes
}

const traverseNode = (currentRow: number, currentCol: number, matrix: number[][], visited: boolean[][], sizes: number[]) => {
    let currentRiverSize = 0;
    const nodesToExplore = [[currentRow, currentCol]]

    while (nodesToExplore.length) {
        const currentNode = nodesToExplore.pop()
        currentRow = currentNode ? currentNode[0] : -1
        currentCol = currentNode ? currentNode[1] : -1
        if (visited[currentRow][currentCol]) continue
        visited[currentRow][currentCol] = true;
        if (matrix[currentRow][currentCol] === 0) continue;
        currentRiverSize++
        const unvisitedNeighbors = getUnvistedNeighbours(currentRow, currentCol, matrix, visited)
        for (const neighbor of unvisitedNeighbors) {
            nodesToExplore.push(neighbor)
        }
    }

    if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

const getUnvistedNeighbours = (currentRow: number, currentCol: number, matrix: number[][], visited: boolean[][]) => {
    const unvistedNeighbours: number[][] = []
    const above = [currentRow - 1, currentCol]
    const below = [currentRow + 1, currentCol]
    const right = [currentRow, currentCol + 1]
    const left = [currentRow, currentCol - 1]
    const visitedAbove = visited[currentRow - 1] ? visited[currentRow - 1][currentCol] : undefined
    const visitedBelow = visited[currentRow + 1] ? visited[currentRow + 1][currentCol] : undefined
    const visitedLeft = visited[currentRow][currentCol - 1]
    const visitedRight = visited[currentRow][currentCol + 1]

    if (currentRow > 0 && !visitedAbove) unvistedNeighbours.push(above)
    if (currentRow < matrix.length - 1 && !visitedBelow) unvistedNeighbours.push(below)
    if (currentCol > 0 && !visitedLeft) unvistedNeighbours.push(left)
    if (currentCol < matrix[0].length - 1 && !visitedRight) unvistedNeighbours.push(right)
    return unvistedNeighbours
}

export {
    riverSizes
}