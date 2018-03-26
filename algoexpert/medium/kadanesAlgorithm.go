package algoexpert

func KadanesAlgorithm(array []int) int {
	maxSoFar, maxEndingHere := array[0], array[0]
	for i := 1; i < len(array); i++ {
		maxEndingHere = max(array[i], maxEndingHere+array[i])
		maxSoFar = max(maxSoFar, maxEndingHere)
	}
	return maxSoFar
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
