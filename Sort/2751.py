import heapq
import sys
n = int(input())
varList = []
for _ in range(n):
    heapq.heappush(varList,int(sys.stdin.readline()))

for _ in range(n):
    print(heapq.heappop(varList))