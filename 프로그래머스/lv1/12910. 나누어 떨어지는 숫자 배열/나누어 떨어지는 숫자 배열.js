function solution(arr, divisor) {
    let answer = [];
    arr.forEach((x)=>{
        if(x%divisor===0)answer.push(x);        
    })
    return answer.length > 0 ? answer.sort((a,b)=>a-b) : [-1];
}