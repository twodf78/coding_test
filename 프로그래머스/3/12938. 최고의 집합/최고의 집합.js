function solution(n, s) {
    if(n > s) return [-1];
    
    let minus = 0;
    while(s%n!==0){
        s--;
        minus++;
    }
    
    const answer = [...new Array(n).fill(s/n)];

    for(let i = 0; i< minus; i++){
        answer[i]++;
    }
    return answer.sort((a,b)=>a-b);
}