package algoexpert

import "sort"

// incase of large array, sort array and use binary search
// O(n log(n)) time | O(1) space
func TwoNumberSum(array []int, target int) []int {
	sort.Ints(array)
	left, right := 0, len(array)-1
	for left < right {
		if array[left]+array[right] > target {
			right--
		} else if array[left]+array[right] < target {
			left++
		} else {
			return []int{array[left], array[right]}
		}
	}
	return []int{}
}
