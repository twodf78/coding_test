function solution(n) {
    var answer = 1;
    const dp = [1n,2n];
    for(let i = 2; i <= n; i++){
        dp.push(dp[i-1] + dp[i-2]);
    }
    return dp[n-1] % 1234567n;
}
