import sys
input = sys.stdin.readline
sys.setrecursionlimit(100000)
def dfs(node):
    for n in graph[node]:
        if check[n] == 0:
            check[n] = check[node]+1
            dfs(n)


n = int(input())
#x에서 y찾기
x,y = map(int, input().split())
m = int(input())
graph = [[]for _ in range(n+1)]
#각 인덱스마다 연결된 값들을 갖는 그래프 잘 만들어주고,
for _ in range(m):
    p,c= map(int, input().split())
    graph[p].append(c)
    graph[c].append(p)
#해당 자리를 밟았는지 마크 
# + 도는 횟수 계산 동시에
#DFS이기에 x와y 사이에 최단 거리가 나올 것
check = [0]*(n+1)
dfs(x)

if check[y]>0: print(check[y])
else: print(-1)