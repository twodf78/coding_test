const checkBlankNum = (board) =>{
    let count = 0;
    board.forEach((x)=>{
        x.forEach((v)=>{
            if(v.isDeleted){
                count++;
            }
        })
    })
    return count;
}
const oneTurn = (m,n,board) =>{
    for(let i = 0; i<m-1; i++){
        for(let j=0; j<n-1; j++){
            const currentBlock = board[i][j];
            const down = board[i+1][j];
            const rightDown = board[i+1][j+1];
            const right = board[i][j+1];
            if(currentBlock!== '-' && currentBlock.val == rightDown.val && currentBlock.val == right.val && currentBlock.val == down.val){
                currentBlock.isDeleted = true;
                down.isDeleted = true;
                rightDown.isDeleted = true;
                right.isDeleted = true;
            }
        }
    }
}
const slideDown  = (m,n,board) =>{
    for(let i = m-1; i>= 1; i--){
        for(let j = n-1; j>=0; j--){
            const currentBlock = board[i][j];
            if(currentBlock.isDeleted){
                let idx = i-1;
                while(idx>= 0 && board[idx][j].isDeleted){
                    idx -=1 ;
                }
                if(idx < 0) {
                    currentBlock.val = "-";
                    continue;
                };
                const up = board[idx][j];
                
                currentBlock.val = up.val;
                currentBlock.isDeleted = false;
                up.val = "-";
                up.isDeleted = true;
                
            }
        }
    }
}
function solution(m, n, board) {
    const arr = board.map((x)=>x.split("").map((x)=>{
        return {
            val: x,
            isDeleted: false,
        }
    }));
    let answer = 0;
    let previous = answer;
    while(true){
        oneTurn(m,n,arr);
        answer = checkBlankNum(arr);
        if(previous === answer){
            break;
        }
        previous = answer;
        slideDown(m,n,arr);

    }
    

    return answer;
}