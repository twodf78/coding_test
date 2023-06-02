function solution(array, commands) {
    let answer = [];
    commands.forEach((x)=>{
        const i = x[0]-1;
        const j = x[1];
        const k = x[2]-1;
        array.slice(i, j).sort((a,b)=>a-b);
        
        answer.push(array.slice(i, j).sort((a,b)=>a-b)[k]);
    })
    return answer;
}