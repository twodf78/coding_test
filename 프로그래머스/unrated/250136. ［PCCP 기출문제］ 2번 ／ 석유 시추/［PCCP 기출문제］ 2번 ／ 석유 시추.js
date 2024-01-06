function solution(land) {
    const oilSpace = [];
    const height = land.length;
    const width = land[0].length;
    
    const dfs = (oilAble, oilCertainSpace) =>{
        const newOilAble = [];
        oilCertainSpace.oilAmount += oilAble.length;
        
        for(let [i, j] of oilAble){
            oilCertainSpace.left = Math.min(oilCertainSpace.left, j);
            oilCertainSpace.right = Math.max(oilCertainSpace.right, j);
            

            if(i - 1 >= 0 && land[i - 1][j] == 1){
                land[i - 1][j] = 0;
                newOilAble.push([i-1, j]);
            }if (i + 1 < height && land[i + 1][j] == 1){
                land[i + 1][j] = 0;
                newOilAble.push([i+1, j]);
            }if (j - 1 >= 0 && land[i][j - 1] == 1){
                land[i][j - 1] = 0;
                newOilAble.push([i, j-1]);
            }if (j + 1 < width && land[i][j+1] == 1){
                land[i][j + 1] = 0;
                newOilAble.push([i, j+1]);
            }
        
        }

        if(newOilAble.length > 0){
            dfs(newOilAble, oilCertainSpace);
        }
        
    }
    
    const findOil = (i, j) =>{
        
        const oilAble = [[i, j]];
        land[i][j] = 0;
    
        const oilCertainSpace = {
            left: j,
            right: j,
            oilAmount : 0,
        } 
        dfs(oilAble, oilCertainSpace);
            
        oilSpace.push(oilCertainSpace);

    }
    
    
    //findOil
    for(let i = 0; i< height; i++){
        for(let j = 0; j< width; j++){
            if(land[i][j] == 1){
                findOil(i, j);
            }
        }
    }

    //findMaxOil
    let maxOil = 0;
    for(let j = 0; j< width; j++){
        let oilTotal = 0;
        for(let oil of oilSpace){
            if(oil.left <= j && j <= oil.right){
                oilTotal += oil.oilAmount;
            }
        }
        maxOil = Math.max(oilTotal, maxOil);
    }
    
    return maxOil;
}