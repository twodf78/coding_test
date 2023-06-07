function solution(n)
{
    let answer = 0;
    n.toString().split("").forEach((x)=>{
        answer += Number(x);
    })
    return answer;
}