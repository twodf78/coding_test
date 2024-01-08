function solution(numbers, target) {
    let answer = 0;
    
    const bfs = (numberList) =>{
        const newNumberList = [];
        if(numberList.length === 0){
            return;
        }else{
            for(let numberPair of numberList){
                const [acc, index] = numberPair;
                newNumberList.push([acc + numbers[index], index + 1]);
                newNumberList.push([acc - numbers[index], index + 1]);
            }
            
            if(numberList.at(0)[1] === numbers.length - 1){
                answer = newNumberList.filter((newNumberPair) => {
                    const [acc, index] = newNumberPair;
                    return acc === target;
                }).length
                
                return;
            }
        }
        bfs(newNumberList);
    }
    
    //acc, index
    bfs([[0, 0]]);
    
    return answer;
}