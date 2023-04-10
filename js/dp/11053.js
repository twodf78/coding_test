const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
const listLength = parseInt(input[0]);
const list = input[1].split(' ').map((e1) => parseInt(e1));
const dp = new Array(listLength).fill(0);
for (let i = 0; i < listLength; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (list[i] > list[j] && dp[j] > max) {
      max = dp[j];
    }
  }
  dp[i] = max + 1;
}

console.log(Math.max(...dp));
