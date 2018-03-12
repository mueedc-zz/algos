package leetcode

import "sort"

func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	triplets := make([][]int, 0)
	for i := 0; i < len(nums)-2; i++ {
		low, high, target := i+1, len(nums)-1, -nums[i]
		for low < high {
			sum := nums[low] + nums[high]
			switch {
			case sum < target:
				low++
			case sum > target:
				high--
			default:
				triplets = append(triplets, []int{nums[i], nums[low], nums[high]})
				for low+1 < high && nums[low] == nums[low+1] {
					low++
				}
				for high-1 > low && nums[high] == nums[high-1] {
					high--
				}
				low++
				high--
			}
		}
		for i+1 < len(nums) && nums[i] == nums[i+1] {
			i++
		}
	}
	return triplets
}
