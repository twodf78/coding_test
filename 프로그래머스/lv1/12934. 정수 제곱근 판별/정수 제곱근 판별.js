function solution(n) {
    var answer = Math.sqrt(n);
    if(answer === parseInt(answer, 0)){
        return (answer+1) ** 2;
    }else{
        return -1;
        
    }
}