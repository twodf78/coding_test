import sys
n = int(input())
st=[int(sys.stdin.readline()) for _ in range(n)]
st.reverse()
cnt = 1
i = 0
while i<n-2:
    if cnt == 2:
        st[i+2]+=st[i]
        i+=1
        cnt == 1
    elif st[i+1] > st[i+2]:
        cnt +=1
        st[i+1] += st[i]
    elif st[i+1] <= st[i+2]:
        st[i+2]+=st[i]
        i+=1
        cnt ==1
    i+=1
if cnt==2:
    print(st[n-2])
else:
    print(st[n-2]+st[n-1])
