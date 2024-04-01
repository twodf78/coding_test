def solution(ingredient):
    answer = 0
    stack = []
    for e in ingredient:
        stack.append(str(e))
        if "".join(stack[-4:]) == '1231':
            answer += 1
            for _ in range(4):
                stack.pop()
            
    return answer

