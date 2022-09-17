import sys
import heapq
a = int(input())
arr = list(map(int, input().split()))
dp = [[0] for _ in range(a)]
heap = []

for i in range(a):
    if dp[i][0]>arr[i]:
        ans.append(arr[i])
        dp[i][0] = arr[i]




for i in ans:
    print(i, end='')
