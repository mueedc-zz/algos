package program

func GetNthFib(n int) int {
	previous := 0
	prev := 1
	for i := 2; i < n; i++ {
		current := prev + previous
		previous = prev
		prev = current
	}
	if n > 1 {
		return prev
	} else {
		return previous
	}
}

// Alternate solution using memoization O(n) time, O(1) space
// func GetNthFib(n int) int {
// 	lastTwo := []int{0, 1}
// 	count := 3
// 	for count <= n {
// 		next := lastTwo[0] + lastTwo[1]
// 		lastTwo = []int{lastTwo[1], next}
// 		count++
// 	}
// 	if n > 1 {
// 		return lastTwo[1]
// 	}
// 	return lastTwo[0]
// }
