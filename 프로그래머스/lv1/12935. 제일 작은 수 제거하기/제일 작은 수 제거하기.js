function solution(arr) {
    const temp = [...arr];
    const answer = [];
    const min = arr.sort((a,b)=>b-a).pop();
    temp.forEach((x)=>{
        if(x !== min) answer.push(x); 
    })
    return answer.length === 0 ? [-1] : answer;
}