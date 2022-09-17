n= int(input())
pack = [-1 for i in range(n+1)]
for i in range(n+1):
    if i<3 or i==4: continue
    if i==3 or i==5: pack[i] = 1
    elif pack[i-3]==-1 and pack[i-5]==-1: 
        continue
    elif pack[i-3]==-1: 
        pack[i]=pack[i-5]+1
    elif pack[i-5]==-1:
        pack[i]=pack[i-3]+1
    else:
        pack[i] = min(pack[i-5], pack[i-3])+1
print(pack)
print(pack[n])