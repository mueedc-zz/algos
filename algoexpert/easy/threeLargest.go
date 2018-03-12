package algoexpert

import "sort"

func FindThreeLargestNumbers(array []int) []int {
	min := len(array) - 3
	sort.Ints(array)
	threeLargest := array[min:]
	return threeLargest
}
