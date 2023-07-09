function solution(brown, yellow) {
    var answer = [];
    const total = brown + yellow;
    for(let i = 1; i<= total; i++){
        if(total % i !==0) continue;
        else{
            const row = total / i;
            if((row-2) * (i-2) === yellow){
                answer.push(row);
                answer.push(i);
                break;
            }
        }
    }
    return answer;
}