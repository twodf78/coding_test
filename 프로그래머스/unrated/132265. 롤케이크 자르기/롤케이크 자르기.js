function solution(topping) {
    let answer = 0;

    const rightCount = {};
    const leftCount = {};

    topping.forEach((x)=>{
        if(!rightCount[x]) {
            rightCount[x] = 1;
            leftCount[x] = 0;
        }
        else{
            rightCount[x]+=1;
        }
    })
    let leftTypeNum = 0;
    let rightTypeNum = Object.keys(rightCount).length;
    for(let i = 0; i< topping.length; i++){
        const current = topping[i];
        if(leftCount[current] === 0) leftTypeNum += 1;
        leftCount[current]++;
        rightCount[current]--;
        if(rightCount[current] === 0) rightTypeNum -= 1;
        if(leftTypeNum === rightTypeNum) answer++;
    }
    return answer;
}