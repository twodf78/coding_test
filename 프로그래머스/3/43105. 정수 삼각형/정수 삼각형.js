function solution(triangle) {
    var answer = 0;
    let answerList = [...triangle[0]];
    
    for(let i = 1; i<triangle.length; i++){
        const currentRow =triangle[i];
        
        let newAnswerList = [];
        for(let j =0; j< currentRow.length ; j++){
            
            const currentNum =currentRow[j];
            if(j === 0){
                newAnswerList.push(answerList[0] +currentNum);              
            }else if(j === currentRow.length - 1){
                newAnswerList.push(answerList[answerList.length - 1] +currentNum);              
            }else{
                newAnswerList.push(Math.max(answerList[j], answerList[j-1]) +currentNum);              
            }
        }
        
        answerList = newAnswerList;
    }
    
    return answerList.sort((a,b)=>b-a)[0];
}