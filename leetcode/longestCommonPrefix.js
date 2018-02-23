/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    if (strs === null || strs.length === 0) return ""
    return strs.reduce((prev, next) => {
        let i = 0
        while (prev[i] && next[i] && prev[i] === next[i]) i++
        return prev.slice(0, i)
    })
}

