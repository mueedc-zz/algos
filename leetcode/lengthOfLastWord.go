package leetcode

import "fmt"

func lengthOfLastWord(s string) int {
	if len(s) == 0 {
		return 0
	}

	preCount, count := 0, 0
	for i := range s {
		if s[i] == ' ' {
			if count != 0 {
				preCount, count = count, 0
			}
		} else {
			count++
		}
	}

	if count == 0 {
		return preCount
	}
	return count
}
