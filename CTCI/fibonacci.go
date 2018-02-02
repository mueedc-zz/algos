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
