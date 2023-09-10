function solution(places) {
    var answer = [];
    
    const checkLeft = (arr, y, x) =>{
        if(arr[y][x] === "X"){
            return true;
        }else if(arr[y][x] === "P"){
            return false;
        }else{
            if((x > 0 && arr[y][x-1] ==="P") ||
               (y < 4 && arr[y+1][x] ==="P") ||
               (y > 0 && arr[y-1][x] ==="P"))
                return false;
            
            return true;
        }
        
    }
    const checkRight = (arr, y, x) =>{
        if(arr[y][x] === "X"){
            return true;
        }else if(arr[y][x] === "P"){
            return false;
        }else{
            if((x < 4 && arr[y][x+1] ==="P") ||
               (y < 4 && arr[y+1][x] ==="P") ||
               (y > 0 && arr[y-1][x] ==="P"))
                return false;
            
            return true;
        }
        
    }
    const checkUp = (arr, y, x)  =>{
        if(arr[y][x] === "X"){
            return true;
        }else if(arr[y][x] === "P"){
            return false;
        }else{
            if((x > 0 && arr[y][x-1] ==="P") ||
               (x < 4 && arr[y][x+1] ==="P") ||
               (y < 4 && arr[y+1][x] ==="P"))
                return false;
            
            return true;
        }
        
    }
    const checkDown = (arr, y, x) =>{
        if(arr[y][x] === "X"){
            return true;
        }else if(arr[y][x] === "P"){
            return false;
        }else{
            if((x > 0 && arr[y][x-1] ==="P") ||
               (x < 4 && arr[y][x+1] ==="P") ||
               (y > 0 && arr[y-1][x] ==="P"))
                return false;
            
            return true;
        }
        
    }
                
    
    const check = (arr, y, x) =>{
        let flag = true;
        if(x > 0)flag &= checkLeft(arr, y, x -1);
        if(x < 4)flag &= checkRight(arr, y, x +1);
        if(y > 0)flag &= checkDown(arr, y-1, x);
        if(y < 4)flag &= checkUp(arr, y+1, x);
        
        return flag;
    }
    
    places.forEach((place)=>{
        const placeArr = place.map((x)=>x.split(""));
        let flag = 1;
        // console.log("placeArr:>>", placeArr);
        for(let i = 0; i<5; i++){
            for(let j = 0; j<5; j++){
                if(placeArr[i][j] === "P"){
                    // console.log("check(placeArr, i, j):>>", check(placeArr, i, j));
                    
                    if(check(placeArr, i, j) === 0){
                        flag = 0;
                        break;
                    }
                }                
            }
            if(!flag)break;
        }
        answer.push(flag)
    })
    return answer;
}