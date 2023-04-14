const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
N = Number(input[0]);

const dp = new Array(N + 1);
for (let i = 1; i < N; i++) {
  dpPrevious = [...dpResult];
  dpResult = [];
  for (let j = 0; j < dpPrevious.length; j++) {
    if (dpPrevious[j]) {
      dpResult.push(false);
    } else {
      dpResult.push(true);
      dpResult.push(false);
    }
  }
}
console.log(dpResult.length);

/**피보나치로 풀면 됨 */
