const fs = require('fs');
const n = parseInt(fs.readFileSync('./input.txt'));

const dp = new Array(n + 1).fill().map((x) => []);
dp[0] = 0;
dp[1] = 1;
dp[2] = 3;
for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
}
console.log(dp[n]);
