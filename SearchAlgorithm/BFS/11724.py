from collections import deque
import sys

n,m=map(int,input().split())
graph =[[] for _ in range(n+1)]
for i in range(m):
    u,v =map(int,sys.stdin.readline().split())
    graph[u].append(v)
    graph[v].append(u)

def bfs(graph,start,visited):
    queue = deque([start])  
    visited[start] = True
    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if not visited[i]:
                visited[i]=True
                queue.append(i)            

cnt = 0
visited = [False]* (n+1)
for i in range(1, n+1):
    if not visited[i]:
        bfs(graph,i,visited)
        cnt += 1
print(cnt)