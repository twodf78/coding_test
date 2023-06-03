function solution(num) {
    let count = 0;
    let number = num;
    while(number!==1){
        if(count > 500) return -1;
        
        if(number %2 === 0){
            number /= 2;
        }else{
            number *= 3;
            number += 1;
        }
        count++;
    }
    return count;
}