import sys
import heapq
n = int(sys.stdin.readline().strip())
lecture = [list(map(int,sys.stdin.readline().split()))for _ in range(n)]
lecture.sort(key=lambda x:(x[0]))
q=[]
for lec in lecture:
    if q and q[0]<=lec[0]:
        heapq.heappop(q)
    heapq.heappush(q, lec[1])
print(len(q))