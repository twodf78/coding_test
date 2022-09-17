import sys
import time
r,c = map(int,sys.stdin.readline().split())
gasMap = [list(sys.stdin.readline().strip())for _ in range(r)]

def mark(i,j):
    gasMap[i][j]='x'

route=0
for i in range(r):
    add = i
    j=c-1
    while j >= 0 and j<=c-1:
        if j==0:
            route+=1    
            mark(add, j)
            break
        if add!=0 and gasMap[add-1][j-1]=='.':
            mark(add, j)
            add-=1
        elif gasMap[add][j-1]=='.':
            mark(add, j)
        elif add!=r-1 and gasMap[add+1][j-1]=='.':
            mark(add, j)
            add+=1
        else:
            mark(add, j)
            j+=2
        j-=1
        
print(route)