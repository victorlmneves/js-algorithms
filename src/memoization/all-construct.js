const allConstruct = (targetString, wordBank, memo = {}) => {
  if (targetString in memo) {
    return memo[targetString]
  }

  if (targetString === '') {
    return [[]]
  }

  const combinations = []

  for (let word of wordBank) {
    if (targetString.indexOf(word) === 0) {
      const suffix = targetString.slice(word.length)
      const suffixWays = allConstruct(suffix, wordBank, memo)
      const targetWays = suffixWays.map(way => [word, ...way])
      combinations.push(...targetWays)
    }
  }

  memo[targetString] = combinations

  return combinations
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // [ [ 'abc', 'def' ] ]
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
console.log(
  allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
  ])
) // []
