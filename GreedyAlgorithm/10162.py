t= int(input())
k=t
a=t//300
t%=300
b=t//60
t%=60
c=t//10
if t%10!=0:
    print(-1)
else:
    print (str(a)+" "+str(b)+" "+str(c))
