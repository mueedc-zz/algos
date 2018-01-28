/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map.hasOwnProperty(nums[i])) return [map[nums[i]], i]
        map[target - nums[i]] = i
    }
}
