function solution(s){
    let stack = 0;
    const arrS = s.split("");
    for (let i = 0 ; i< arrS.length ; i++){
        const string = arrS[i];
        if(string == '('){
            stack += 1;
        }else if(string ==')'){
            stack -= 1;
            if(stack <0) {
                break;
            }
        }
    }
    return stack == 0;
}