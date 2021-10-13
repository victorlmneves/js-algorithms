const allConstruct = (targetString, wordBank) => {
  const table = Array(targetString.length + 1)
    .fill()
    .map(() => [])

  table[0] = [[]]

  for (let i = 0; i <= targetString.length; i++) {
    for (let word of wordBank) {
      if (targetString.slice(i, i + word.length) === word) {
        const newCombinations = table[i].map(subArray => [...subArray, word])
        table[i + word.length].push(...newCombinations)
      }
    }
  }

  return table[targetString.length]
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'c'])) // [ [ 'abc', 'def' ], [ 'ab', 'c', 'def' ] ]
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // []
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) /* [
  [ 'enter', 'a', 'p', 'ot', 'ent', 'p', 'ot' ],
  [
    'enter', 'a',
    'p',     'ot',
    'ent',   'p',
    'o',     't'
  ],
  [
    'enter', 'a',
    'p',     'o',
    't',     'ent',
    'p',     'ot'
  ],
  [
    'enter', 'a',
    'p',     'o',
    't',     'ent',
    'p',     'o',
    't'
  ]
]
*/
console.log(allConstruct('eeeeeeeeeeeeeeeeeez', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])) // []
