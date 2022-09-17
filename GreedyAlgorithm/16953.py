import sys
a,b = map(int,sys.stdin.readline().split())
min = 0
while a <= b:
    if a==b:
        print(min+1)
        exit()
    if (b-1)%10 == 0:
        b=int((b-1)/10)
    elif b%2==0:
        b=int(b/2)
    else:
        break
    min+=1
print(-1)