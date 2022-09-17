import sys
n =int(input())
card =[]
for i in range(n):
    card.append(int(sys.stdin.readline()))
if n == 1:
    print(card[0])
else:
    card.sort(reverse=True)
    mergrCnt=0
    merge = [card[-1]+card[-2]]
    result = merge[0]
    del card[-2:]
    for i in range(n-2):
        if len(card)==1:
            result+=card[0] + merge[-1]
            break
        if merge[mergrCnt]>card[-2]:
            merge.append(card[-1]+card[-2])
            result += card[-1]+card[-2]  
        else:
            merge.append(merge[mergrCnt]+card[-1])
            result += merge[mergrCnt]+card[-1]
            mergrCnt+=1
        card.pop()
    
    print(result)