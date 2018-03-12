import math

# O(n log(n)) time | O(1) space
def binarySearch(array, target):
    left, right = 0, len(array) - 1
    while left <= right:
        mid = math.floor(left + (right-left)/2)
        if target > array[mid]:
            left = mid + 1
        elif target < array[mid]:
            right = mid - 1
        else:
            return mid
    return -1
