import sys
a=[]
i=0
while True:
    a.append(list(map(int,sys.stdin.readline().split())))
    if [0, 0, 0] in a:
        break
    best=(a[i][2]//a[i][1])*a[i][0]
    if a[i][2]%a[i][1] >= a[i][0]:
        best += a[i][0]
    else:
        best += a[i][2]%a[i][1]
    i+=1
    print("Case "+str(i)+": " + str(best))  