function solution(n, lost, reserve) {
    lost.sort((a,b)=>a-b);
    reserve.sort((a,b)=>a-b);
    for(let i = 0; i<lost.length;i++){
        const idx = reserve.indexOf(lost[i]);
        if(idx >= 0){
            lost.splice(i,1);
            reserve.splice(idx,1);
            i-=1;
        }
    }
    let answer = n-lost.length;
    lost.forEach((item)=>{

        for(let i=0;i< reserve.length; i++){
            if(item===reserve[i]+1 || item===reserve[i]-1){
                
                reserve.splice(i,1);                
                answer++;
                break;
            }
            
        }
            
    })
    return answer>n? n : answer;
}