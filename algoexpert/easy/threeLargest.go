package algoexpert

import "sort"

func FindThreeLargestNumbers(array []int) []int {
	var three []int
	sort.Ints(array)
	for i := len(array) - 1; i > len(array)-4; i-- {
		three = append(three, array[i])
	}
	sort.Ints(three)
	return three
}
