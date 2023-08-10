function solution(n, t, m, p) {
    let wholeString = '';
    let answer = '';
    let i = 0;
    let flag = true;
    p = p ===m ? 0 : p;
    while(flag){
        const arr= i.toString(n).split("");
        for (const x of arr){
            const currentString = isNaN(x) ? x.toUpperCase() : x
            wholeString+=currentString;
            if(wholeString.length % m == p){
                 answer+=currentString;
                if(answer.length >= t) {
                    flag= false;
                    break;
                };
            }
        }
        i++;
    }
    return answer;
}