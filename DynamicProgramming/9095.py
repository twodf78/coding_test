import sys
def sum(a):
    if a==1:
        return (1)
    elif a==2:
        return (2)
    elif a==3:
        return (4)
    else:
        return sum(a-1) + sum(a-2) + sum(a-3)
t=int(input())
while t>0:
    n=int(sys.stdin.readline())
    print(sum(n))
    t-=1