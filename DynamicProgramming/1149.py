import sys
n=int(input())
color = [list(map(int, sys.stdin.readline().split()))for _ in range(n)]
#i는 몇 번 집
for i in range(1,n):
    #j는 색깔
    for j in range(3):
        if j == 2:
            color[i][j] += min(color[i-1][j-1],color[i-1][j-2])
        else:
            color[i][j] += min(color[i-1][j-1],color[i-1][j+1])
print(min(color[n-1]))