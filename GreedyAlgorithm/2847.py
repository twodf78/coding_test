import sys
n=int(sys.stdin.readline().strip())
score = [int(sys.stdin.readline().strip())for _ in range(n)]

i=n-1
scoreSum=0
while i>0:
    if score[i]<=score[i-1]:
        temp=score[i-1]
        score[i-1]=score[i]-1
        scoreSum+=temp-score[i-1]
    i-=1
print(scoreSum)