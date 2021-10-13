const canConstruct = (targetString, wordBank) => {
  if (targetString === '') {
    return true
  }

  for (let word of wordBank) {
    if (targetString.indexOf(word) === 0) {
      const suffix = targetString.slice(word.length)

      if (canConstruct(suffix, wordBank) === true) {
        return true
      }
    }
  }

  return false
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
console.log(
  canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
  ])
) // false
