const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
const n = input[0].split(' ').map((x) => parseInt(x))[0];
const k = input[0].split(' ').map((x) => parseInt(x))[1];

const dp = new Array(n).fill().map((e1) => []);
dp[0] = [
  [k, 0],
  [k - input[1].split(' ').map((x) => parseInt(x))[0], input[1].split(' ').map((x) => parseInt(x))[1]],
];
for (let i = 1; i < n; i++) {
  let objectWeight = input[i + 1].split(' ').map((x) => parseInt(x))[0];
  let objectValue = input[i + 1].split(' ').map((x) => parseInt(x))[1];
  dp[i] = [...dp[i - 1]];
  for (let j = 0; j < dp[i - 1].length; j++) {
    let previousWeight = dp[i - 1][j][0];
    let sumWeight = previousWeight - objectWeight;
    if (sumWeight < 0) continue;

    let previousValue = dp[i - 1][j][1];
    let sumVal = previousValue + objectValue;
    dp[i].push([sumWeight, sumVal]);
  }
  dp[i - 1] = [];
}
let max = 0;
for (let i = 0; i < dp[n - 1].length; i++) {
  max = dp[n - 1][i][1] > max ? dp[n - 1][i][1] : max;
}
console.log(max);
