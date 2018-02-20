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

// Alternate Solution using helper function
// func validPalindrome(s string) bool {
// 	left, right := 0, len(s)-1
// 	for left < right {
// 		if string(s[left]) != string(s[right]) {
// 			return isPalindrome(s, left+1, right) || isPalindrome(s, left, right-1)
// 		}
// 		left++
// 		right--
// 	}
// 	return true
// }

// func isPalindrome(s string, left int, right int) bool {
// 	for left < right {
// 		if string(s[left]) == string(s[right]) {
// 			left++
// 			right--
// 		} else {
// 			return false
// 		}

// 	}
// 	return true
// }
