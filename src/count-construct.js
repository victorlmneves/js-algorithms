const countConstruct = (targetString, wordBank) => {
  if (targetString === '') {
    return 1
  }

  let totalCount = 0

  for (let word of wordBank) {
    if (targetString.indexOf(word) === 0) {
      const nrWaysForRest = countConstruct(targetString.slice(word.length), wordBank)
      totalCount += nrWaysForRest
    }
  }

  return totalCount
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // 4
console.log(
  countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
  ])
) // 0
