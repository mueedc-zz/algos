package algoexpert

func getNthFib(n int) int {
	lastTwo := []int{0, 1}
	count := 3
	for count <= n {
		next := lastTwo[0] + lastTwo[1]
		lastTwo = []int{lastTwo[1], next}
		count++
	}
	if n > 1 {
		return lastTwo[1]
	}
	return lastTwo[0]
}
