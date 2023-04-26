function solution(t, p) {
    let answer = 0;
    for(let i = 0; i< t.length - p.length + 1; i++){
        const partialT = Number(t.slice(i,i+p.length));
        if(partialT <= Number(p))answer++;
    }
    return answer;
}