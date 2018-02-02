package leetcode

const (
	MaxInt32 = 1<<31 - 1
	MinInt32 = -1 << 31
)

func reverse(x int) int {
	rev := 0
	for x != 0 {
		rev = (rev*10 + x%10)
		x = x / 10
		if rev > MaxInt32 || rev < MinInt32 {
			return 0
		}
	}
	return rev
}
