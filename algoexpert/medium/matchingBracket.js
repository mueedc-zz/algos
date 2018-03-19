// O(n) time and space
function balancedBrackets(string) {
  const match = {')': '(', ']': '[', '}': '{'}
	const opening = '([{'
	const closing = ')]}'
	const stack = []
	
	for (const char of string) {
		if (opening.includes(char)) stack.push(char)
		else if (closing.includes(char)) {
			if (stack.length === 0) return false
			if (stack[stack.length-1] === match[char]) stack.pop()
			else return false
		}
	}
	return stack.length == 0
}
