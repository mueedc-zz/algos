# O(n log(n) + m log(m)) time | O(1) space
def smallestDifference(arrayOne, arrayTwo):
    arrayOne.sort()
    arrayTwo.sort()
    idxOne, idxTwo = 0, 0
    smallest, current = float("inf"), float("inf")
    pair = []
    while idxOne < len(arrayOne) and idxTwo < len(arrayTwo):
        first, second = arrayOne[idxOne], arrayTwo[idxTwo]
        if first < second:
            current = second - first
            idxOne += 1
        elif first > second:
            current = first - second
            idxTwo += 1
        else:
            return [first, second]
        if smallest > current:
            smallest = current
            pair = [first, second]
    return pair
