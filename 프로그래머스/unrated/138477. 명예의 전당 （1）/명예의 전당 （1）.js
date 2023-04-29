function solution(k, score) {
    const hallOfFame = [];
    const answer = [];
    score.forEach((score)=>{
        if(hallOfFame.length < k) {
            hallOfFame.push(score);
            hallOfFame.sort((a,b)=>a-b);
            answer.push(hallOfFame[0]);
        }else if(hallOfFame.length === k){
            
            hallOfFame.sort((a,b)=>a-b);
            const smallestScore = hallOfFame.shift();
            hallOfFame.push(smallestScore > score ? smallestScore : score);
            answer.push(smallestScore > score ? smallestScore : hallOfFame[0] > score ? score : hallOfFame[0]);
            
        }
        
        
        
    })
    
    
    
    
    
    return answer;
}