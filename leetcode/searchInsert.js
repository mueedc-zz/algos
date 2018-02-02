var searchInsert = function(nums, target) {
    let begin = 0
    let end = nums.length - 1
    while (begin <= end) {
        let mid = begin + ((end-begin)/2)|0
        if (nums[mid] < target) begin = mid + 1
        else if (nums[mid] === target) return mid
        else end = mid - 1
    }
    return begin
}
