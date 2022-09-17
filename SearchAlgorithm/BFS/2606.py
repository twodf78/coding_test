from collections import deque
num = int(input())
cnct = int(input())
network = [[]for i in range(num+1)]
for i in range(cnct):
    x,y = map(int, input().split())
    network[x].append(y)
    network[y].append(x)

def bfs(graph,start,visited):
    queue = deque([start])  
    visited[start] = True
    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if not visited[i]:
                visited[i]=True
                queue.append(i)            

visited = [False]* (num+1)
bfs(network,1,visited)
print(visited.count(True)-1)
