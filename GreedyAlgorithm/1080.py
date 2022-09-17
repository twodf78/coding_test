import sys
n,m=map(int,sys.stdin.readline().split())

a = [list(map(int,sys.stdin.readline().strip()))for _ in range(n)]
b = [list(map(int,sys.stdin.readline().strip()))for _ in range(n)]

def change(x,y):
    for i in range(x,x+3):
        for j in range(y,y+3):
            a[i][j] = 1 - a[i][j]

count =0 
for i in range(0,n-2):
    for j in range(0,m-2):
        if a[i][j]!=b[i][j]:
            change(i,j)
            count+=1
result = True
for i in range(0,n):
    for j in range(0,m):
        if a[i][j]!=b[i][j]:
            result=False
if not result:
    print(-1)
else:
    print(count)