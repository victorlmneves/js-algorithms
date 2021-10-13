const countConstruct = (targetString, wordBank) => {
  const table = Array(targetString.length + 1).fill(0)
  table[0] = 1

  for (let i = 0; i <= targetString.length; i++) {
    for (let word of wordBank) {
      if (targetString.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i]
      }
    }
  }

  return table[targetString.length]
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
