import sys
import heapq
n,k=map(int,sys.stdin.readline().split())
tools=list(map(int,sys.stdin.readline().split()))

maxidx = swap = times = num = 0
multitap = [0]*n
for i in tools:
    if i in multitap:
        pass
    elif 0 in multitap:
        multitap[multitap.index(0)] = i
    else:
        times+=1
        for j in multitap:
            if j not in tools[num:]:
                swap=j
                break
            elif tools[num:].index(j) > maxidx:
                maxidx = tools[num:].index(j)
                swap = j
        multitap[multitap.index(swap)] = i
        maxidx = swap = 0
    num += 1
print(times)
