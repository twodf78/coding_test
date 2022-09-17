a = int(input())
s = []
for i in range(a):
    s.append(input().split(" "))
    s[i][0]=int(s[i][0])
    s[i][1]=int(s[i][1])

s.sort(key=lambda x:(x[1],x[0]))

cnt = 1
temp = s[0]
for i in range(1,a):
    if int(s[i][0]) >= int(temp[1]):
        temp = s[i]
        cnt +=1

print(cnt)
