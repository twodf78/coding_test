function solution(board, moves) {
    var answer = 0;
    const result = [];
    for(let i = 0; i< moves.length ;i++){
        const currentIndex = moves[i]-1;
        
        for(let j = 0; j< board.length; j++){
            const currentDoll = board[j][currentIndex];
            
            if(currentDoll!==0){
                if(result.length >  0 && result[result.length -1 ] === currentDoll){
                    result.pop();
                    answer += 1;
                }else{
                    result.push(currentDoll);
                }
                board[j][currentIndex] = 0;
                break;
            }            
        }
    }
    return answer*2;
}