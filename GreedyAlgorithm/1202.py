import sys
import heapq 
n,k = map(int,sys.stdin.readline().split())
diamond = []
bag=[]
price =0
for i in range(n):
    diamond.append(list(map(int,sys.stdin.readline().split())))
for i in range(k):
    bag.append(int(sys.stdin.readline()))
diamond.sort()
bag.sort()

temp=[]
for bagWeight in bag:
    while diamond and bagWeight>=diamond[0][0]:
        heapq.heappush(temp,-diamond[0][1])
        heapq.heappop(diamond)
    if temp:
        price+=heapq.heappop(temp)
    elif not diamond:
        break
print(-price)