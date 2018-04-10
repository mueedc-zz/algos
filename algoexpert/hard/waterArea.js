// O(n) time | O(1) space
function waterArea(heights) {
  let left = 0
  let right = heights.length - 1
  let leftMax = 0
  let rightMax = 0
  let water = 0

  while (left < right) {
    if (heights[left] < heights[right]) {
      heights[left] >= leftMax
        ? (leftMax = heights[left])
        : (water += leftMax - heights[left])
      left++
    } else {
      heights[right] >= rightMax
        ? (rightMax = heights[right])
        : (water += rightMax - heights[right])
      right--
    }
  }

  return water
}
