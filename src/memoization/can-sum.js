const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) {
    return memo[targetSum]
  }

  if (targetSum === 0) {
    return true
  }

  if (targetSum < 0) {
    return false
  }

  if (numbers.includes(targetSum)) {
    return true
  }

  for (let num of numbers) {
    const remainder = targetSum - num
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true
      return true
    }
  }

  memo[targetSum] = false

  return false
}

// console.log(canSum(7, [5, 3, 4, 7])) // true
// console.log(canSum(7, [2, 4])) // false
// console.log(canSum(300, [7, 14])) // false

const tabCanSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false)
  table[0] = true

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        table[i + num] = true
      }
    }
  }

  return table[targetSum]
}

console.log(tabCanSum(7, [2, 3])) // true
console.log(tabCanSum(7, [5, 3, 4, 7])) // true
console.log(tabCanSum(7, [2, 4])) // false
console.log(tabCanSum(8, [2, 3, 5])) // true
console.log(tabCanSum(300, [7, 14])) // false
