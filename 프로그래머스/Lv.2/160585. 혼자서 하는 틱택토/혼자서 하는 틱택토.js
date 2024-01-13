function solution(board) {
    var answer = -1;
    
    let oCount = 0;
    let xCount = 0;

    board.forEach((row)=>{
        const rowList = row.split("");
        rowList.forEach((item)=>{
            if(item === "O"){
                oCount ++;
            }else if(item === "X"){
                xCount ++;
            }
        })
    })
    if(oCount < xCount || oCount - xCount > 1) return 0;

    let oDone = 0;
    let xDone = 0;
    const itemAdd = (currentItem)=>{
        if(currentItem === "O"){
            oDone++;
        }else if (currentItem === "X"){
            xDone++;
        }
    }
    const boardList = board.map((x)=>x.split(""));
    for(let i = 0; i<3; i++){
        for(let j = 0; j<3; j++){
            const currentItem = boardList[i][j]; 
            if (currentItem === ".") continue;

            if(i === 0 && j === 0){
                if(currentItem === boardList[0][1] && currentItem === boardList[0][2]){
                    itemAdd(currentItem);
                }
                if(currentItem === boardList[1][1] && currentItem === boardList[2][2]){
                    itemAdd(currentItem);
                }
                if(currentItem === boardList[1][0] && currentItem === boardList[2][0]){
                    itemAdd(currentItem);
                }
            }
            else if (i ===0 && j===2){
                if(currentItem === boardList[1][2] && currentItem === boardList[2][2]){
                    itemAdd(currentItem);
                }
                if(currentItem === boardList[1][1] && currentItem === boardList[2][0]){
                    itemAdd(currentItem);
                }
            }
            else if (i === 2 && j === 0){
                if(currentItem === boardList[2][1] && currentItem === boardList[2][2]){
                    itemAdd(currentItem);
                }
            }
            else if (i === 1 && j === 0){
                if(currentItem === boardList[1][1] && currentItem === boardList[1][2]){
                    itemAdd(currentItem);
                }
            }
            else if (i === 0 && j === 1){
                if(currentItem === boardList[1][1] && currentItem === boardList[2][1]){
                    itemAdd(currentItem);
                }
            }                
        }
    }
    if((xDone === 0 && oDone >= 3) 
    || (oDone === 0 &&  xDone >= 2)
    || (oDone >= 1 &&  xDone >= 1)) return 0;
    
    if(xDone > 0 && oDone > 0) return 0;
    if(xDone > 0 && oCount != xCount) return 0;
    if(oDone > 0 && oCount - xCount != 1) return 0;
        
    return 1 ;
}