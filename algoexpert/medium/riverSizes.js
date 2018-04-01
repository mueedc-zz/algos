// O(w * h) time and space, where w is matrix width and h is matrix height
// Must visit every node in the matrix
function riverSizes(matrix) {
	const sizes = []
	const visited = matrix.map(row => row.map(value => false))
	for (let i = 0 ; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (visited[i][j]) continue
			traverseNode(i, j, matrix, visited, sizes)
		}
	}
	return sizes
}

function traverseNode(i, j, matrix, visited, sizes) {
	let currentSize = 0
	const nodesToExplore = [[i, j]]
	while (nodesToExplore.length) {
		const currentNode = nodesToExplore.pop()
		i = currentNode[0]
		j = currentNode[1]
		if (visited[i][j]) continue
		visited[i][j] = true
		if (matrix[i][j] === 0) continue
		currentSize++
		const unvistedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited)
		for (const neighbor of unvistedNeighbors) {
			nodesToExplore.push(neighbor)
		}
	}
	if (currentSize > 0) sizes.push(currentSize)
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
	const unvisitedNeighbor = []
	if (i > 0 && !visited[i - 1][j]) unvisitedNeighbor.push([i - 1, j])
	if (i < matrix.length -1 && !visited[i + 1][j]) unvisitedNeighbor.push([i + 1, j])
	if (j > 0 && !visited[i][j - 1]) unvisitedNeighbor.push([i, j - 1])
	if (j < matrix[i].length - 1 && !visited[i][j + 1]) unvisitedNeighbor.push([i, j + 1])
	return unvisitedNeighbor
}
