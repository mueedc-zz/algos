package leetcode

func validPalindrome(s string) bool {
	bp0, bp1 := -1, -1
	flag := true
	for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
		if s[i] == s[j] {
			continue
		}
		bp0, bp1 = i, j
		break
	}
	if bp0 == -1 {
		return true
	}
	for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
		if i == bp0 {
			j++
			continue
		}
		if s[i] == s[j] {
			continue
		}
		flag = false
		break
	}
	if flag {
		return true
	}
	for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
		if j == bp1 {
			i--
			continue
		}
		if s[i] == s[j] {
			continue
		}
		return false
	}
	return true
}
