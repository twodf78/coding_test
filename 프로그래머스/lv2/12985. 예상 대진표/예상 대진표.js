function solution(n,a,b)
{
    let answer = 0;
    while(Math.ceil(a/2) !== Math.ceil(b/2)){
        a=Math.ceil(a/2);
        b=Math.ceil(b/2);
        answer+=1;
    }
    return answer+1;
}