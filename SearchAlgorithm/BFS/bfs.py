from collections import deque

def bfs(graph, start, visited):
    #큐 만들기 1부터 집어놓고
    queue =deque([start])
    #1은 만났으니 표기
    visited[start] = True
    #큐가 없어 질 때까지
    while queue:
        #지금 위치에 있는 요소를 큐에서 빼고
        #인접 노드를 graph[v]로 확인 
        v = queue.popleft()
        print(v, end=' ')
        
        #인접 노드 하나씩 보는 데
        for i in graph[v]:
            #인접 노드 중 방문을 안 한게 있으면 
            #큐에다 넣고, 방문 했다고 표시
            if not visited[i]:
                queue.append(i)
                visited[i] = True

graph = [
    #1,2,3,4,5,6,7,8이 각각 인접한 노드
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
]
#처음엔 다 방문하지 않았음
visited = [False] * 9
bfs(graph,1,visited)