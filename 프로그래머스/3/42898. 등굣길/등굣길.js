
function solution(m, n, puddles) {
    var answer = 0;
    if(m===1 || n===1){
        return puddles.length === 0 ? 1 : 0;
    }
    const dp = [];
    
    for(let i = 0; i<m; i++){
        dp.push([...new Array(n).fill(1)])
    }
    for(let [height,width] of puddles){
        let i = height - 1;
        let j = width - 1;
        if(i === 0){
            for(let idx = j; idx < n; idx++){
                dp[i][idx] = 0;
            }
        }
        if(j === 0){
            for(let idx = i; idx < m; idx++){
                dp[idx][j] = 0;
            }
        }
        dp[i][j] = 0;
    }
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(dp[i][j] === 0) continue;
            dp[i][j] =(dp[i-1][j] + dp[i][j-1]) % 1000000007;
            
        }
    }
    
    return dp[m-1][n-1] % 1000000007;
}