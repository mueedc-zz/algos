def Add(x, y):
    while y != 0: # iterate until there is nothing left to carry
        carry = x & y # carry contains common set bits of x and y
        x = x ^ y # sum of bits of x and y where at least one of the bits is not set
        y = carry << 1 # carry is bitwise shifted so that adding it to x gives the right sum
    return x

print(Add(15, 32)) # 47
