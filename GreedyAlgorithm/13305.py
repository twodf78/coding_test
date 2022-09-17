import sys
n=int(input())
dis=[]
oil=[]
dis=list(map(int,sys.stdin.readline().split()))
oil=list(map(int,sys.stdin.readline().split()))
price = dis[0]*oil[0]
bestoil = oil[0]
for i in range(1,n-1):
    if bestoil > oil[i]:
        bestoil=oil[i]
    price += dis[i]*bestoil
print(price)