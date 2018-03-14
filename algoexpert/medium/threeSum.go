package algoexpert

import "sort"

// O(n^2) time | O(n) space
func ThreeNumberSum(array []int, target int) [][]int {
	sort.Ints(array)
	triple := [][]int{}
	for i := 0; i < len(array)-2; i++ {
		left, right := i+1, len(array)-1
		for left < right {
			currentSum := array[i] + array[left] + array[right]
			if currentSum == target {
				triple = append(triple, []int{array[i], array[left], array[right]})
				left++
				right--
			} else if currentSum > target {
				right--
			} else if currentSum < target {
				left++
			}
		}
	}
	return triple
}
