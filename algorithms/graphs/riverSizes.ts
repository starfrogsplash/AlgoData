const riverSizes = (matrix: number[][]): number[] => {
    const sizes: number[] = []
    const visited = matrix.map(row => row.map(value => false))
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (visited[i][j]) continue
            traverseNode(i, j, matrix, visited, sizes)
        }
    }
    return sizes
}

const traverseNode = (i: number, j: number, matrix: number[][], visited: boolean[][], sizes: number[]) => {
    let currentRiverSize = 0;
    const nodesToExplore = [[i, j]]

    while (nodesToExplore.length) {
        const currentNode = nodesToExplore.pop()
        i = currentNode ? currentNode[0] : -1
        j = currentNode ? currentNode[1] : -1
        if (visited[i][j]) continue
        visited[i][j] = true;
        if (matrix[i][j] === 0) continue;
        currentRiverSize++
        const unvisitedNeighbors = getUnvistedNeighbours(i, j, matrix, visited)
        for (const neighbor of unvisitedNeighbors) {
            nodesToExplore.push(neighbor)
        }
    }

    if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

const getUnvistedNeighbours = (i: number, j: number, matrix: number[][], visited: boolean[][]) => {
    const unvistedNeighbours: number[][] = []
    if (i > 0 && !visited[i - 1][j]) unvistedNeighbours.push([i - 1, j])
    if (i < matrix.length - 1 && !visited[i + 1][j]) unvistedNeighbours.push([i + 1, j])
    if (j > 0 && !visited[i][j - 1]) unvistedNeighbours.push([i, j - 1])
    if (j < matrix[0].length - 1 && !visited[i][j + 1]) unvistedNeighbours.push([i, j + 1])
    return unvistedNeighbours
}

export {
    riverSizes
}