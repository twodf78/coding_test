import sys
n=int(sys.stdin.readline())
a=[]
length=[]
num = ['9','8','7','6','5','4','3','2','1','0']
cnt = 0
count = []

def changeSameAlp(chge):
    for j in range(len(a)):
        while chge in a[j]:
            idx = a[j].index(chge)
            a[j][idx] = num[cnt]

for i in range(n):
    a.append(list(sys.stdin.readline().strip()))
    length.append([len(a[i]),i])
    count.append(0)
length.sort(key=lambda x:(x[0]),reverse=True)

while cnt < 10:
    recent = length[0][1]
    #recent에 더 이상 없을 경우
    #순서 바꿔줌
    #순서 바꿔도 안 되면 break
    if count[recent]>=len(a[recent]):
        length.sort(key=lambda x:(x[0]),reverse=True)
        if length[0][0]==0:
            break
        
    recent = length[0][1]
    #바꿀 아이템 바꾸기
    change = a[recent][count[recent]]
    #해당 위치 숫자일 때 cnt는 추가 x
    #보고 있는 위치만 추가
    if change in num:
        length[0][0]-=1
        count[recent]+=1
    #알파벳을 숫자로 바꿀 때만 cnt+1
    #보고 있는 위치도 추가
    if change not in num:
        a[recent][count[recent]] = num[cnt]
        length[0][0]-=1
        changeSameAlp(change)
        cnt+=1
        count[recent]+=1

    if length[0][0]<length[1][0]:
        length.sort(key=lambda x:(x[0]),reverse=True)


result = [0]
for j in range(1,n+1):
    result.append(int("".join(a[j-1])))
    result[0] += result[j]
print(result[0])