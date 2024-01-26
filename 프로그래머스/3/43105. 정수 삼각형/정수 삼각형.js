function solution(triangle) {
    let answerList = [0];
    
    for(let currentRow of triangle){
        const newAnswerList = [];
        currentRow.forEach((currentNum, index) => {
            if(index === 0){
                newAnswerList.push(answerList[0] +currentNum);              
            }else if(index === currentRow.length - 1){
                newAnswerList.push(answerList[answerList.length - 1] +currentNum);              
            }else{
                newAnswerList.push(Math.max(answerList[index], answerList[index-1]) +currentNum);              
            }
        });
        answerList = newAnswerList;
    }
    
    return Math.max(...answerList);
}