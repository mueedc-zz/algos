function vowelSwitch (word) {
  const map = new Set()
  map.add('a').add('e').add('i').add('o').add('u')
  const foundVowels = []
  for (let i = 0; i < word.length; i++) {
    if (map.has(word[i])) foundVowels.push(word[i])
  }

  foundVowels.reverse()
  let result =  word.replace(/[aeiou]/g, '*')
  let newStr = ''

  let k = 0
  for (let j = 0; j < word.length; j++) {
    if (result[j] === '*') {
      newStr += foundVowels[k]
      k++
    } else newStr += result[j]
  }
  console.log('result:', result, 'word:', word, 'newStr:', newStr)
  return newStr
}

vowelSwitch('aeiouhhhhhhhhhhhh')

