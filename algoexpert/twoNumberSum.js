// O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
  const dict = {}
  for (let i = 0; i < array.length; i++) {
    if (dict.hasOwnProperty(array[i]))
      return [
        Math.min(targetSum - array[i], dict[array[i]]),
        Math.max(targetSum - array[i], dict[array[i]]),
      ]
    dict[targetSum - array[i]] = targetSum - array[i]
  }
  return []
}
