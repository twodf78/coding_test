r = 1000 -int(input())
money = [500,100,50,10,5,1]
cnt =0
for m in money:
    cnt += r // m
    r %= m
print(cnt)