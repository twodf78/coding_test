import sys
sys.setrecursionlimit(10000)

dx=[1,1,-1,-1,1,-1,0,0]
dy=[0,1,0,1,-1,-1,1,-1]
#재귀 함수 활용
def dfs(x,y):
    #먼저 해당 자리는 밟았으니까 0으로 표시해주고
    map_list[x][y]=0
    for i in range(8):
        #상,하,좌,우,대각 모든 방향 +1에 대해서
        nx = x + dx[i]
        ny = y + dy[i]
        #그 자리가 존재하고 섬이면 재귀함수
        if 0<=nx < h and 0<= ny < w and map_list[nx][ny]==1:
            dfs(nx, ny)
while True:
    w,h = map(int, sys.stdin.readline().split())
    if w==0 and h ==0:
        break
    map_list = []
    for _ in range(h):
        map_list.append(list(map(int, sys.stdin.readline().split())))
    cnt = 0
    for i in range(h):
        for j in range(w):
            if map_list[i][j] == 1:
                dfs(i,j)
                cnt+=1
    print(cnt)
