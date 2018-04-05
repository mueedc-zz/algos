# O(n * m) time | O(n * m) space
def levenshteinDistance(str1, str2):
    small = str1 if len(str1) < len(str2) else str2
    big = str1 if len(str1) >= len(str2) else str2
    even = [x for x in range(len(small) + 1)]
    odd = [None for x in range(len(small) + 1)]
    for i in range(1, len(big) + 1):
        if i % 2 == 1:
            current = odd
            previous = even
        else:
            current = even
            previous = odd
        current[0] = i
        for j in range(1, len(small) + 1):
            if big[j - 1] == small[i - 1]:
                current[j] = previous[j - 1]
            else:
                current[j] = 1 + min(current[j- 1], current[j], previous[j - 1])
    return even[-1] if len(big) % 2 == 0 else odd[-1]
