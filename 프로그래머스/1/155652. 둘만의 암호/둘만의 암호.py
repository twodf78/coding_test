

def solution(s, skip, index):
    alpha = [chr(code) for code in range(97, 123)]
    for c in skip:
        alpha.remove(c)
    
    return "".join(map(lambda c: alpha[(alpha.index(c) + index) % len(alpha)], s))
