import sys
n=int(input())
plus = []
minus =[]
for i in range(n):
    num = int(sys.stdin.readline())
    if num>0:
        plus.append(num)
    else:
        minus.append(num)
plus.sort(reverse=True)
minus.sort()
multipled = -1
cnt = 0
for i in range(len(plus)):
    if plus[i]==1:
        cnt +=plus[i]
        continue
    if multipled == -1:
        multipled = plus[i]
    else:
        cnt+=(plus[i]*multipled)
        multipled = -1
if multipled !=-1:
    cnt+=multipled
    
multipled = 1
for i in range(len(minus)):

    if multipled == 1:
        multipled = minus[i]
    else:
        cnt+=(minus[i]*multipled)
        multipled = 1
if multipled != 1:
    cnt +=multipled
print(cnt)