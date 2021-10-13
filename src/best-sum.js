const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) {
    return []
  }

  if (targetSum < 0) {
    return null
  }

  if (numbers.includes(targetSum)) {
    return [targetSum]
  }

  let shortestCombination = null

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderCombination = bestSum(remainder, numbers)

    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num]

      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination
      }
    }
  }

  return shortestCombination
}

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(7, [2, 4])) // null
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(8, [1, 3, 4, 5])) // [3, 5]
console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]
