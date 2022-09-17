import sys
t =int(input())
while t>0:
    n = int(input())
    a=[]
    cnt = 0
    for i in range(n):
        p,i = map(int,sys.stdin.readline().split())
        a.append([p,i])
    a.sort(key=lambda x:(x[0]))
    temp =a[0][1]
    for i in range(1,n):
        if a[i][1]>temp:
            cnt+=1
        else:
            temp = a[i][1]
    print(n-cnt)
    t-=1