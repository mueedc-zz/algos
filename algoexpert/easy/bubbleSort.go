package algoexpert

func BubbleSort(array []int) []int {
	isSorted := false
	count := 0
	for !isSorted {
		isSorted = true
		for i := 0; i < len(array)-count-1; i++ {
			if array[i] > array[i+1] {
				array[i], array[i+1] = array[i+1], array[i]
				isSorted = false
			}
		}
		count++
	}
	return array
}
