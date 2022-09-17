n = int(input())
num_n = list(map(int, input().split()))
num_n.sort()
m=int(input())
findm = list(map(int, input().split()))

def search(a):
    left = 0
    right = n-1
    while left <=right:
        mid = (left + right) //2
        if  a == num_n[mid]:
            return 1
        elif a < num_n[mid]:
            right = mid-1
        else:
            left = mid +1
    return 0 
    
for i in findm:
    print(search(i))