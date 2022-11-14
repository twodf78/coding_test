import sys
from collections import Counter
n = int(input())
intList = [int(sys.stdin.readline()) for i in range(n) ]
intList.sort()

#avg
sum = 0
for i in range(n):
    sum += intList[i]
if ((sum / n - sum//n )>=0.5 ):
    avg = sum//n + 1
else:
    avg = sum//n

#min
min = intList[n//2]

#freq
freq = Counter(intList).most_common()
freqVal = freq[0][0]
if len(intList)>1:
    if freq[0][1] == freq[1][1]:
        freqVal = freq[1][0]
    else:
        freqVal = freq[0][0]
else:
    freqVal = freq[0][0]


#dif
dif = intList[n-1] - intList[0]


print(avg)
print(min)
print(freqVal)
print(dif)
