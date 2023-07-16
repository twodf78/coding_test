function solution(m, n, startX, startY, balls) {
    const answer = [];
    for(const [ballX, ballY] of balls){
        const left = (startX + ballX) ** 2 + (startY - ballY) ** 2;
        const right = (2*m - startX - ballX) ** 2 + (startY - ballY) ** 2;
        const top = (startX - ballX) ** 2 + (2*n - startY - ballY) ** 2;
        const down = (startX - ballX) ** 2 + (startY + ballY) ** 2;
        
        let min = 0;
        if(ballX == startX){
            if(ballY > startY){
                min = Math.min(left, right, down);
            }else{
                min = Math.min(left, right, top);  
            }
        }
        else if(ballY == startY){
            if(ballX > startX){
                min = Math.min(left, top, down);
            }else{
                min = Math.min(right, top, down);    
            }
        }
        else{
            min = Math.min(left, right, top, down);    
        }
        
        answer.push(min)
    }
    return answer;
}