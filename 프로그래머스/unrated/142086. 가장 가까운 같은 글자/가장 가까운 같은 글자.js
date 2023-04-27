function solution(s) {
    var answer = [];
    const map = new Map();
    [...s].map((val,i)=>{
        if(!map.has(val)){
            answer.push(-1);
        }else{
            answer.push(i - map.get(val));
        }
        map.set(val,i);        
        
    });

        
    return answer;
}