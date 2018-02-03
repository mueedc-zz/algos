package leetcode

func searchRange(nums []int, target int) []int {
	length := len(nums)
	if length == 0 {
		return []int{-1, -1}
	}
	low, high := 0, length-1
	var mid int

	for low < high && low >= 0 && high < length {
		if mid = low + (high-low)/2; nums[mid] < target {
			low = mid + 1
		} else {
			high = mid
		}
	}

	if low < 0 || high >= length || nums[low] != target {
		return []int{-1, -1}
	}

	left := high

	low, high = left, length-1
	for low < high && low >= 0 && high < length {
		if mid = high - (high-low)/2; nums[mid] <= target {
			low = mid
		} else {
			high = mid - 1
		}
	}

	right := low

	return []int{left, right}
}
