const common = [];
function solution(X, Y) {
    const arrX = X.split("");
    const arrY = Y.split("");
    const dictY={};
    arrY.forEach((num, idx)=>{
        dictY[num] = 0;
    })
    arrY.forEach((num, idx)=>{
        dictY[num] +=1;
    })
    arrX.forEach((num)=>{
        const numIdx = dictY[num];
        if(numIdx && numIdx >= 0){
            common.push(num);
            dictY[num]-=1;
        }
        
    })
    const answer =common.map(x=>parseInt(x)).sort((a,b)=>b-a).join("");
    return common.length ? answer[0]==='0' ? '0': answer: "-1";
}