function solution(prices) {
    const priceDict ={};
    prices.forEach((v,i)=>{
        priceDict[i] =  0;
    });
    for(let i = 0; i<prices.length;i++){
        const currentVal = prices[i];
        for(let j = i + 1; j<prices.length; j++){
            priceDict[i]++;
            if(currentVal > prices[j]){
                break;
            }
        }
    }
    
    let answer = Object.values(priceDict);
    return answer;
}