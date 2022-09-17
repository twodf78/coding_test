from math import ceil
import sys
cnt = 0
a = sys.stdin.readline().strip()
differ = a[0]
for i in range(1, len(a)):
    if a[i]!=differ:
        cnt +=1
        differ = a[i]
print(int(ceil(cnt/2)))