function solution(n) {
    let nCount = n.toString(2).split("").reduce((sum, v)=> v === "1" ? sum + 1 : sum,0);
    let answer = 0;
    for(let i = n + 1; true; i++){
        const count = i.toString(2).split("").reduce((sum, v)=> v === "1" ? sum + 1 : sum,0);
        if(count === nCount){
            answer = i;
            break;
        }
    }
    return answer;
}