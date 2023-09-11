function solution(k, d) {
    let answer = 1 + Math.floor(d/k);
    // console.log("answer: >> ", answer)
    const compare = (x, y) =>{
        return x**2 + y **2 <= d**2;
    }
    let rowCount = answer;
    let currentX = (answer - 1) * k;
    for(let y=k; y<=d; y+=k){
        let currentCount = 0;
        while(!compare(currentX - k*currentCount, y)){
            currentCount++;
        }
        rowCount -= currentCount;
        if(rowCount < 0) break;
        currentX -= k*currentCount;
        answer+=rowCount;
    }
    return answer;
}