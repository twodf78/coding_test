function solution(k, tangerine) {
    let answer = 0;
    let total = 0;
    const dict = {};
    tangerine.forEach((x)=>{
        if(!dict[x]){
            dict[x] = 1;
        }
        else{
            dict[x] += 1;
        }
    });
    const numArray = Object.values(dict).sort((a,b)=>b-a);
    for (const num of numArray){
        if(total < k){
            answer+=1;
            total += num;
        }else{
            break;
        }
    }
    return answer;
}