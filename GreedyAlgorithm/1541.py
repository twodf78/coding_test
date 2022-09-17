import re
a = input()
numOfP = a.count("+")
M = a.find("-") 
PfrontOFM= 0
index =0
for i in range(numOfP):
    index = a.find("+", index)
    if index < M:
        PfrontOFM +=1
    index+=len("+")
c = re.split('[+-]',a)
for i in range(len(c)):
    c[i]=int(c[i])

result = c[0]
if M!=-1:
    for i in range(1,len(c)):
        if PfrontOFM >= i:
            result += c[i]
            continue
        result -=c[i]
else:
    for i in range(1,len(c)):
        result += c[i]
    
print(result)