function solution(s) {
    var answer = true;
    const arrS = s.split("");
    
    if(arrS.length!==4 && arrS.length!==6) {
        return false; 
    }
    return !arrS.some((x)=>isNaN(x));
}