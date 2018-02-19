/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const dict = new Set()
    const intersection = new Set()
    for (let i = 0; i < nums1.length; i++) {
        dict.add(nums1[i])
    }
    for (let i = 0; i < nums2.length; i++) {
        if (dict.has(nums2[i])) intersection.add(nums2[i])
    }
    return Array.from(intersection)   
}
