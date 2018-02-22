package leetcode

func moveZeroes(nums []int) {
	current := 0
	for _, num := range nums {
		if num != 0 {
			nums[current] = num
			current++
		}
	}
	for current < len(nums) {
		nums[current] = 0
		current++
	}
}
