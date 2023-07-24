const check = (arr) => {
    const stack = [];
    for(let i = 0; i < arr.length; i++){
        const current = arr[i];
        if(current == "(" || current == "{" || current == "["){
            stack.push(arr[i]);
        }else{
            const last = stack.at(-1); 
            // console.log(last);
            // console.log(current);
            
            if(last  == "(" && current == ")"){
                stack.pop();
            }
            else if(last  == "{" && current == "}"){
                stack.pop();
            }
            else if(last  == "[" && current == "]"){
                stack.pop();
            }
            else{
                return false;
            }
        }
    }
    return stack.length === 0;        
}
function solution(s) {
    var answer = 0;
    s = s.split("");
    for(let i = 0; i< s.length; i++){
        // console.log(s);
        
        answer += check(s) ? 1 : 0;
        // console.log(answer);
        
        s.push(s.shift());
    }
    return answer;
}