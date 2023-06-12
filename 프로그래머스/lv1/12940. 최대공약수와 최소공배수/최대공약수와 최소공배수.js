function solution(n, m) {
    var answer = [];
    let min = n>=m ? m : n;
    let max = n>=m ? n : m;
    for(let i = min; i >= 1; i--){
        if(max % i === 0 && min % i === 0){
            answer.push(i);
            break;
        }
    }

    for(let i = 1; true; i++){
        const mul = i* max;
        if(mul % min === 0){
            answer.push(mul);
            break;
        }
    }
    return answer;
}