a = [i for i in range(100)]
find = int(input())
for i in range(len(a)):
    if find == a[i]:
        print("Searched Successfully")
        break
    elif i == len(a)-1:
        print("Not found")