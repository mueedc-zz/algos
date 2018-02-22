/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let str = ''
    for (let i = s.length-1; i >= 0; i--) {
        str += s[i]
    }
    return str
}

