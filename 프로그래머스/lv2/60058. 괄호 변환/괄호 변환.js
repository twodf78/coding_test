const isBalanced = (arr) =>{
    let count = 0;
    for(let  i = 0; i<arr.length; i++){
        if(arr[i] === "("){
            count++;
        }else{
            count--;
        }
    }
    return count === 0;
}
const isCorrect = (arr) =>{
    let count = 0;
    for(let  i = 0; i<arr.length; i++){
        if(arr[i] === "("){
            count++;
        }else{
            count--;
            if(count < 0) break;
        }
    }
    return count === 0;
}
const wReverse = (arr) =>{
    let result = '';
    for(let  i = 0; i<arr.length; i++){
        if(arr[i] === "("){
            result+=')';
        }else{
            result+='(';
        }
    }
    return result;
}

function solution(p) {
    const arrP = p.split("");

    const uvDivision = (arr) =>{
        let resultString = '';
        let startPoint = 0;
        for(let i = 0; i<arr.length; i++){
            const w = arr.slice(startPoint, i+1);
            if(isBalanced(w)){
                const v = arr.slice(i+1, arr.length);
                if(isCorrect(w)){
                    resultString+=w.join("");
                    startPoint = i+1;
                    continue;
                }else{
                    resultString+="(";
                    resultString+=uvDivision(v);
                    resultString+=")";
                    resultString+=wReverse(w.slice(1, w.length-1));
                    break;
                }
            }
        }
        return resultString;
    }
    const answer = uvDivision(arrP);
    return answer;
}