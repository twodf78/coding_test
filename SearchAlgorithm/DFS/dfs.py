from collections import deque

#스택 방법
def dfs_stack(graph, start):
    # 기본은 항상 두개의 리스트를 별도로 관리해주는 것
    need_visited, visited = [], []
    # 시작 노드를 지정하기 
    need_visited.append(start)
    # 만약 아직도 방문이 필요한 노드가 있다면,
    while need_visited:
        # 그 중에서 가장 마지막 데이터를 추출 (스택 구조의 활용)
        #다만 list의 pop은 성능이 떨어짐
        node = need_visited.pop()
        #만약 그 노드가 방문한 목록에 없다면
        if node not in visited:
            # 방문한 목록에 추가하기 
            visited.append(node)
            # 그 노드에 연결된 노드를 
            need_visited.extend(graph[node])
    return visited

#큐 활용
def dfs_queue(graph, start):
    visited = []
    need_visited = deque([start])
    # 방문이 필요한 리스트가 아직 존재한다면
    while need_visited:
        # 시작 노드를 지정하고
        v = need_visited.popright()
        # 만약 방문한 리스트에 없다면
        if v not in visited:
            # 방문 리스트에 노드를 추가
            visited.append(v)
            # 인접 노드들을 방문 예정 리스트에 추가
            need_visited.extend(graph[v])
    return visited

#재귀 함수 활용
def dfs_recursive(graph, start, visited = []):
## 데이터를 추가하는 명령어 / 재귀가 이루어짐 
    visited.append(start)
    for node in graph[start]:
        if node not in visited:
            dfs_recursive(graph, node, visited)
    return visited
graph = {}
graph['A'] = ['B', 'C']
graph['B'] = ['A', 'D']
graph['C'] = ['A', 'G', 'H', 'I']
graph['D'] = ['B', 'E', 'F']
graph['E'] = ['D']
graph['F'] = ['D']
graph['G'] = ['C']
graph['H'] = ['C']
graph['I'] = ['C', 'J']
graph['J'] = ['I']


print(dfs_stack(graph,'A'))
print(dfs_queue(graph,'A'))
print(dfs_recursive(graph,'A'))