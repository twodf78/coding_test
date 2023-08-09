function solution(s) {
    var answer = [];
    const arrS =s.slice(2,-2).split("},{").map((x)=>x.split(",")).sort((a,b)=>a.length - b.length);
    answer.push(arrS[0][0]);
    for(let i = 1; i<arrS.length; i++){
        const currentSet = arrS[i];
        for(let j = 0; j< currentSet.length; j++){
            const idx = answer.indexOf(currentSet[j]);
            if(idx >= 0) continue;
            answer.push(currentSet[j]);
            break;
        }
    }
    return answer.map(Number);
}