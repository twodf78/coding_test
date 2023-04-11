const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
let n = parseInt(input);

const dp = [new Array(10).fill(1)];
dp[0][0] = 0;

let t = n - 1;

while (t--) {
  dp.push([...Array(10)]);
}
for (let N = 1; N < n; N++) {
  for (let i = 0; i <= 9; i++) {
    dp[N][i] = ((dp[N - 1][i - 1] || 0) + (dp[N - 1][i + 1] || 0)) % 1000000000;
  }
}
const output = dp[n - 1].reduce((result, curr) => {
  return (result + curr) % 1000000000;
}, 0);

console.log(output);
