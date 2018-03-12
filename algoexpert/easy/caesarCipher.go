package algoexpert

import "strings"

func CaesarCipherEncryptor(str string, key int) string {
	runes := []rune(str)
	alphabet := "abcdefghijklmnopqrstuvwxyz"
	for i, char := range runes {
		idx := strings.Index(alphabet, string(char))
		if idx == -1 {
			return ""
		}
		newIdx := (idx + key) % 26
		runes[i] = rune(alphabet[newIdx])
	}
	return string(runes)
}
