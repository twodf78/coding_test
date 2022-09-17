n = int(input())
card = list(map(int, input().split()))
card.sort()
m= int(input())
num = list(map(int, input().split()))

def binary(target):
    start =0
    end = n-1
    while start <= end:
        mid = (start + end) //2
        if target == card[mid]:
            return 1
        elif target < card[mid]:
            end = mid-1
        else:
            start = mid+1
    return 0
for i in num:
    print(binary(i),end = " ")
print()