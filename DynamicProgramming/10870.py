save = [-1]*21
def fibonacci(a):
    if a==0:
        save[0]=0
        return 0
    elif a==1:
        save[1]=1
        return 1
    elif save[a]!=-1:
        return save[a]
    else:
        save[a]=fibonacci(a-1)+fibonacci(a-2)
        return save[a]

n=int(input())
print(fibonacci(n))