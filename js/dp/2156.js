const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const wineNum = parseInt(input[0]);
const memo = new Array(wineNum).fill([]);
memo[0] = [0, parseInt(input[1])];
for (let i = 1; i < wineNum; i++) {
  memo[i] = [Math.max(...memo[i - 1])];
  for (let j = 0; j < 2; j++) {
    const previousWineAmount = memo[i - 1][j];
    memo[i].push(previousWineAmount + parseInt(input[i + 1]));
  }
}
console.log(Math.max(...memo[wineNum - 1]));
