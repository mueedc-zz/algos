/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let maxArea = 0
    while (left < right) {
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right-left))
        height[left] < height[right] ? left++ : right--
    }
    return maxArea
}
