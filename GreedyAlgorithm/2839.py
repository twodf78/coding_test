a =int(input())
cnt = a // 5
r = a % 5
while r<=a:
    if r%3!=0:
        cnt-=1
        r += 5
        continue
    print (cnt + r//3)
    exit()
print(-1)