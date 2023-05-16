function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>(a-b));
    d.forEach((amount)=>{
        budget-=amount;
        if(budget<0){
            return answer;
        }
        answer+=1;
        
    })
    return answer;
}