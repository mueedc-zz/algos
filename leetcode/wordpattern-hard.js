/*
 * Same as word pattern algorithm but now no spaces
 * Has table and recursion required to check if the string chunks are
 * the completed string and then use the hashtable to see if the pattern
 * matches the input
*/
function wordpattern(pattern, input) {
    const map = {} // hashmap to contain key value pairs [pattern-letter: string chunk from string] 
    const check = [] // set containing unique string chunks to check against pattern letters
    return isMatch(input, 0, pattern, 0, map,  check)
}

function isMatch(str, strIndex, pattern, patternIndex, map, check) {
  // when both string and pattern have been checked fully
  if (strIndex === str.length && patternIndex === pattern.length) return 1
  // when only one of the string or pattern has been checked fully
  if (strIndex === str.length || patternIndex === pattern.length) return 0
    
  const currentPatternChar = pattern[patternIndex]
  // if this pattern character exists in our hashmap we then check if it we can use it to match the remaining string chunk
  if (currentPatternChar in map) {
    const currentMappedStr = map[currentPatternChar]
    // no match case: exit function
    if (str.substr(strIndex, currentMappedStr.length) !== currentMappedStr) return 0
    // match case: continue onward
    return isMatch(str, strIndex + currentMappedStr.length, pattern, patternIndex + 1, map, check)
  } else { //pattern character does not exist in our hashmap
    for (let i = strIndex; i < str.length; i++) {
      const strChunk = str.substring(strIndex, i + 1)
      if (check.indexOf(strChunk) !== -1) continue
      // add to hashmap
      map[currentPatternChar] = strChunk
      if (check.indexOf(strChunk) === -1) check.push(strChunk)
      if (isMatch(str, i + 1, pattern, patternIndex + 1, map, check)) return 1 // keep checking if full string is a match
      if (currentPatternChar in map) delete map[currentPatternChar] // backtracking

      const strChunkIndex = check.indexOf(strChunk)
      if (strChunkIndex > -1) check.splice(strChunkIndex, 1)
    }
  }
  // does not match our pattern
  return 0
}
