x= int(input())
space = [-1 for _ in range(x)]
for i in range(1, x+1):
    idx = i-1
    if i==1:
        space[idx]=0
    elif i==2 or i==3:
        space[idx]=1
    #해당 숫자가 2와 3으로 안 나눠떨어질 때
    elif i%2!=0 and i%3!=0:
        space[idx]=space[idx-1]+1
    #해당 숫자가 3으로 나눌 수 있을 때(2는 안 됨)
    elif i%2!=0:
        space[idx]=space[int(i/3-1)]+1
    #해당 숫자가 2로 나눌 수 있을 때(3은 안 됨)
    elif i%3!=0:
        space[idx]=space[idx-1]+1
    else:
        space[idx]=min(space[int(i/3-1)],space[int(i/2-1)])+1

print(space[x-1])