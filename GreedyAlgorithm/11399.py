a = int(input())
b = input().split(" ")
cnt = 0
merge = 0
for i in range(a):
    b[i] = int(b[i])
b.sort()
for i in range(a):
    cnt += b[i]
    merge += cnt
print(merge)