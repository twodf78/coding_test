const checkDivision = (num) =>{
    return Number.isInteger(Math.sqrt(num));
}

function solution(left, right) {
    let sum = 0;
    for(let i = left; i<= right; i++){
        if(!checkDivision(i)){
            sum += i;
        }else{
            sum -= i;
        }
        
    }
    return sum;
}