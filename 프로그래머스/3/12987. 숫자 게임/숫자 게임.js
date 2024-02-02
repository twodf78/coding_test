function solution(A, B) {
    let answer = 0;
    
    A.sort((a,b) => a- b);
    B.sort((a,b) => a- b);
    
    let indexForB = 0;    
    for(let i = 0; i< A.length ; i++){
        const currentA = A[i];
        
        while(indexForB < B.length){
            const currentB = B[indexForB];
            indexForB++;
            if(currentA < currentB){
                answer++;
                break;
            }
        }
        if(indexForB === B.length) break;
    }
    return answer;
}