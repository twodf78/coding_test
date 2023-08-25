function solution(n) {
    let sum = 0, answer = 1, front = 1;
    for(let i=1;i<n;i++){
        sum += i;
        while(sum > n){
            sum -= front;
            front++;
        }
        if(sum === n){
            answer++;
            sum -= front;
            front++;
        }
    }
    return answer
}