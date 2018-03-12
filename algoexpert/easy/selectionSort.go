package algoexpert

func SelectionSort(array []int) []int {
	current := 0
	for current < len(array)-1 {
		smallest := current
		for i := current + 1; i < len(array); i++ {
			if array[smallest] > array[i] {
				smallest = i
			}
		}
		array[current], array[smallest] = array[smallest], array[current]
		current++
	}
	return array
}
