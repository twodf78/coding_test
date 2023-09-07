function solution(storey) {
    let answer = 0;
    const storeyArr = storey.toString().split("").map(Number).reverse();
    const addOneToCertainIdx = (idx)=>{
        do{
            if(idx === storeyArr.length) storeyArr.push(0);
            storeyArr[idx] =storeyArr[idx] + 1 >= 10 ? 0 : storeyArr[idx] + 1;
        }while(storeyArr[idx++] === 0);
    }
    for(let i = 0; i<= storeyArr.length-1; i++){
        const currentNum = storeyArr[i];
        if(currentNum > 5 || (currentNum === 5 && i!== storey.length - 1 && storeyArr[i+1] >= 5)){
            answer+= 10 - currentNum;
            addOneToCertainIdx(i + 1);
        }else{
            answer+=currentNum;
        }
    }
    return answer;
}