const compare = (small, big)=>{
    if(small === big || small * 2 === big || small * 3 === big *2 || small *4 === big *3) return true;
    return false;
}
const factorial = (num) =>{
    let ans = 0;
    for(let i = num ; i>0; i--){
        ans+=i;
    }
    return ans;
}

function solution(weights) {
    let answer = 0;
    const weightDict = {};
    
    weights.sort((a,b)=>a-b);
    weights.forEach((weight) =>{
        if(!weightDict[weight]){
            weightDict[weight] = 1;
        }else{
            weightDict[weight]++;
        }
    })
    
    const weightArr = [...Object.keys(weightDict)].map(Number);

    for(let i = 0; i<weightArr.length; i++){
        const currentWeight = weightArr[i];
        let currentCount = 0;
        for(let j = i+1; j<weightArr.length; j++){
            const targetWeight = weightArr[j];
            
            if(targetWeight > currentWeight * 2) break;
            if(compare(currentWeight, targetWeight)) currentCount+= weightDict[targetWeight];
        }
        answer += (currentCount * weightDict[currentWeight]) + factorial(weightDict[currentWeight] - 1);
    }
    
    return answer;
}