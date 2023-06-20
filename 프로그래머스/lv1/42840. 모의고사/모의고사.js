function solution(answers) {
    let answer = [];
    let maxCorrect = 0;
    let firstAns = 0;
    let secondAns = 0;
    let thirdAns = 0;
    
    let firstIdx = 1;
    for(let i = 1; i<=answers.length ; i++){
        if(firstIdx>5){
            firstIdx = 1;
        }
        if(answers[i-1] === firstIdx){
            firstAns++;
        }
        firstIdx++;
    }
    maxCorrect = firstAns;
    let secondIdx = 0;
    const secondArr=[ 2, 1, 2, 3, 2, 4, 2, 5];
    for(let i = 1; i<=answers.length ; i++){
        if(secondIdx>7){
            secondIdx = 0;
        }
        if(answers[i-1] ===secondArr[secondIdx]){
            secondAns++;
        }
        secondIdx++;
    }
    maxCorrect = maxCorrect > secondAns ? maxCorrect : secondAns;
    
    let thirdIdx = 0;
    const thirdArr=[3,3,1,1,2,2,4,4,5,5];
    for(let i = 1; i<=answers.length ; i++){
        if(thirdIdx>9){
            thirdIdx = 0;
        }
        if(answers[i-1] ===thirdArr[thirdIdx]){
            thirdAns++;
        }
        thirdIdx++;
    }
    maxCorrect = maxCorrect > thirdAns ? maxCorrect : thirdAns;
    if(maxCorrect===firstAns)answer.push(1);
    if(maxCorrect===secondAns)answer.push(2);
    if(maxCorrect===thirdAns)answer.push(3);
    return answer;
}