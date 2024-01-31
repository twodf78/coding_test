function solution(n, s) {
    if(n > s) return [-1];
    const answer = [...new Array(n).fill(parseInt(s/n))];
    for(let i = 0; i<s%n; i++){
        answer[i]++;
    }
    return answer.sort((a,b)=>a-b);
}