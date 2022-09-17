import sys
n,k = map(int,input().split())
a=[int(sys.stdin.readline())for _ in range(n)]
a.reverse()
cnt = 0
for i in a:
    cnt += k//i
    k %= i
    if k == 0:
        break
print(cnt)