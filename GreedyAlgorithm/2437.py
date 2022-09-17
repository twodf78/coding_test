import sys
N = int(input())
weight=list(map(int,sys.stdin.readline().split()))
weight.sort()

minVal=1
for i in range(N):
    if minVal<weight[i]:
        break
    minVal+=weight[i]
print(minVal)