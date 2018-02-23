func maxSubArray(nums []int) int {
	maxSoFar, maximum := nums[0], nums[0]
	for i := 1; i < len(nums); i++ {
		maxSoFar = max(maxSoFar+nums[i], nums[i])
		maximum = max(maxSoFar, maximum)
	}
	return maximum
}

func max(a, b int) int {
	if a < b {
		return b
	}
	return a
}
