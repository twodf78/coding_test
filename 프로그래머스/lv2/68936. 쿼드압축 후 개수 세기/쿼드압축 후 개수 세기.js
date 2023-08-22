function solution(arr) {
    let answer = [0,0];
    let checkFlag = true;
    const n = arr.length;
    const checkAndFill = (standard, xStart, xEnd, yStart,yEnd) => {
        if(standard == 2) return true;
        for(let i = yStart; i<yEnd; i++){
            for(let j = xStart; j<xEnd;j++){
                if(arr[i][j]!= standard){
                    return false;
                }
            }
        }
        answer[standard] += 1;
        for(let i = yStart; i<yEnd; i++){
            for(let j = xStart; j<xEnd;j++){
                arr[i][j] = 2;
            }
        }
        return true;
    }
    for(let i = n; i>= 1; i/=2){
        checkFlag = false;
        for(let yStart = 0; yStart<n;yStart+=i){           
            for(let xStart = 0; xStart<n;xStart+=i){
                const standard = arr[yStart][xStart];
                checkFlag &= checkAndFill(standard,xStart, xStart+i, yStart, yStart+i);
            }
        }
        if(checkFlag) break;
    }
    return answer;
}