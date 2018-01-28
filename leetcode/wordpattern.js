/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = function(pattern, str) {
  const map = {}
	const words = str.split(' ')
	const container = []

	if (words.length !== pattern.length) return false

	for (let i = 0; i < pattern.length; i++) {
		if (map.hasOwnProperty(pattern[i])) {
			if (map[pattern[i]] !== words[i]) return false
			else continue
		} else {
			if (!container.some(item => item === words[i])) {
				map[pattern[i]] = words[i]
				container.push(words[i])
			} else return false
		}
	}
	return true
}
