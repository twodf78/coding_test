
function solution(n) {
    const dp = [0,1];
    for(let i = 2; i<=n; i++){
        dp.push((dp[i-1] + dp[i-2])%1234567);
    }
    let answer = dp[n];
    
    return answer%1234567;
}