function solution(s) {
    var answer = 0;
    const arrS = s.trim().split("");
    let tempS = undefined;
    let equalCount = 0;
    let notEqualCount = 0;
    arrS.forEach((item)=>{
        if(!tempS){
            tempS = item;
            equalCount++;
        }
        else if(item!== tempS){
            notEqualCount++;
        }else if(item=== tempS){
            equalCount++;
        }
        if(equalCount === notEqualCount){
            equalCount = 0;
            notEqualCount = 0;
            tempS = undefined;
            answer++; 
            
        }
        
        
    })
    return equalCount !== notEqualCount ? answer + 1 : answer;
}