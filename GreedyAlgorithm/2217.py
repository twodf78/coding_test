n = int(input())
k =[]
for a in range(n):
    k.append(int(input()))
k.sort()
w = k[0]*n
for a in range(1,n):
    if k[a]*(n-a) > w:
        w = k[a]*(n-a)
print(w)