import sys
document = sys.stdin.readline().strip()
search = sys.stdin.readline().strip()

idx = document.find(search)
show = 0
while idx!=-1:
    delete= document[0:idx+len(search)]
    document=document.replace(delete, "",1)
    show+=1
    idx=document.find(search)
print(show)