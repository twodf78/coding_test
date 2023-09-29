function solution(r1, r2) {
    let ans = 0;
    let a = 0, b = 0;
    for(let i = 1; i < r2; i++){
        a = Math.floor(Math.sqrt(Math.pow(r2,2) - Math.pow(i,2)));
        if(i < r1){
            b = Math.ceil(Math.sqrt(Math.pow(r1,2) - Math.pow(i,2)));
        }
        else{
            b = 1;
        }
        ans += a - b + 1;
    }
    return 4 * (r2 - r1 + 1) + 4 * ans;
}