n = int(input())
a = input().split(" ")
b = input().split(" ")
c = []
temp = []
a_temp=[]
cnt = 0


for i in range(n):
    a[i] =int(a[i])
    b[i] = int(b[i])
    temp.append(b[i])
    a_temp.append(-1)

def findMax(s):
    var = -1
    index = 0
    for i in range(len(s)):
        if s[i] > var and s[i]<=100:
            index = i
            var=s[i]
    temp[index]+=101
    return index

for i in range(n):
    c.append(findMax(temp))

a.sort()
for i in range(n):
    a_temp[c[i]] = a[i]
for i in range(n):
    cnt+=a_temp[i]*b[i]
print(cnt)