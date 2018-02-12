package leetcode

func lengthOfLongestSubstring(s string) int {
	m, max, position := make(map[rune]int), 0, 0

	for index, char := range s {
		if _, ok := m[char]; ok && m[char] >= position {
			if index-position > max {
				max = index - position
			}
			position = m[char] + 1
		}
		m[char] = index
	}

	if len(s)-position > max {
		max = len(s) - position
	}
	return max
}
