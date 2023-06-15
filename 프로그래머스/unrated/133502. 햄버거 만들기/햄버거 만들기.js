function solution(ingredient) {
    let stack = [];
    let breadCount = 0;
    let answer = 0;
    for(let i=0; i<ingredient.length; i++){
        stack.push(ingredient[i]);
        if(stack.length>=4){
            if(stack.slice(-4).join("") === '1231'){
                answer++;
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                
            }
        }
        
    }
    return answer;
}