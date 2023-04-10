const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const testCaseNum = parseInt(input[0]);
const dp = [1, 1, 1, 2, 2];
for (let i = 1; i <= testCaseNum; i++) {
  let n = parseInt(input[i]) - 1;
  let idx = dp.length - 1;
  while (n >= dp.length) {
    dp.push(dp[idx - 4] + dp[idx]);
    idx++;
  }
  console.log(dp[n]);
}
