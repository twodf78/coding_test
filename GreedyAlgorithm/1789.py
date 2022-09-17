s=int(input())
cnt=0
i=1
while True:
    cnt+=i
    if cnt==s:
        print(i)
        break
    if cnt>s:
        print(i-1)
        break
    i+=1