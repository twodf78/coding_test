N = int(input())
varList = [10000]
for i in range(N):
    varList.append(int(input()))
varList.sort(reverse=True)

for i in range(N):
    print (varList.pop())