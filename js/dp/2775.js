let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const testCaseNum = input[0];
const output = [];

const zeroFloor = [];
for (let i = 0; i <= 14; i++) {
  zeroFloor.push(i);
}
const dp = [];
dp.push(zeroFloor);

for (let i = 1; i < testCaseNum * 2; i += 2) {
  let k = parseInt(input[i]);
  let n = parseInt(input[i + 1]);
  if (k >= dp.length) {
    let firstIdx = dp.length - 1;
    while (firstIdx <= k) {
      let temp = [];
      let sum = 0;
      for (let i = 0; i <= 14; i++) {
        sum += dp[firstIdx][i];
        temp.push(sum);
      }
      dp.push(temp);
      firstIdx++;
    }
  }

  output.push(dp[k][n]);
}

for (let i = 0; i < output.length; i++) {
  console.log(output[i]);
}
