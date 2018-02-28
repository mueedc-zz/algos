/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    const dict = {}
    // create hashtable with number of times character appears in string
    for (let i = 0; i < s.length; i++) {
        !dict.hasOwnProperty(s[i]) ? dict[s[i]] = 1 : dict[s[i]]++
    }
    
    //find first instance of unique character and return index
    for (let key in dict) {
        if (dict[key] === 1) return s.indexOf(key)
    }
    
    // if no unique character
    return -1
}
