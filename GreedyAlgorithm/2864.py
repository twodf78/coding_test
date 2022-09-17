import sys

a,b = sys.stdin.readline().split(" ")

for i in range(len(a)):
    if a[i]=="5":
        a=a.replace("5", "6")
for i in range(len(b)):
    if b[i]=="5":
        b=b.replace("5","6")
maxSum =str(int(a)+int(b))

for i in range(len(a)):
    if a[i]=="6":
        a=a.replace("6", "5")
for i in range(len(b)):
    if b[i]=="6":        
        b=b.replace("6", "5")

minSum = str(int(a)+int(b))

print(minSum + " " + maxSum)