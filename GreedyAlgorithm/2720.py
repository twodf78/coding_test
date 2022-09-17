import sys
T = int(input())

while T>0:
    C = int(sys.stdin.readline().strip())
    quarter = str(C//25)
    C%=25
    dime = str(C//10)
    C%=10
    nickel = str(C//5)
    C%=5
    penny = str(C//1)

    print(quarter + " " + dime + " " + nickel +" " +penny)
    T-=1