a=input()
n=[]
m=""
for i in range(len(a)):
    n.append(int(a[i]))
n.sort(reverse=True)
for i in range(len(n)):
    m+=str(n[i])
m=int(m)
if(m%30!=0):
    print(-1)
else:
    print(m)