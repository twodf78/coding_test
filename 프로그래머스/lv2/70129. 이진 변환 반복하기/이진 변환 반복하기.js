function solution(s) {
    let count = 0, zeroCount = 0;
    while(s!=1){
        zeroCount += s.split("").filter((x)=>x==0).length;
        s = s.split("").filter((x)=>x==1).length.toString(2);
        count+=1;
    }
    return [count, zeroCount];
}