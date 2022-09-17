import sys
N,L=map(int,sys.stdin.readline().split())

location = list(map(int,sys.stdin.readline().split()))
location.sort()
minTape = N
tapeIdx = 0

for i in range(N-1):
    if location[i+1]+0.5 <= location[tapeIdx]-0.5+L:
        minTape-=1
    else:
        tapeIdx=i+1

print(minTape)