const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const direction = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];
const output = [];
const lenN = Number(input.shift());
const map = new Array(lenN).fill();
const visited = [];

const bfs = (startX, startY) => {
  let result = 1;
  const queue = [[startX, startY]];

  visited[startX][startY] = true;

  while (queue.length) {
    let [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let changedX = x + direction[i][0];
      let changedY = y + direction[i][1];

      if (changedX < 0 || changedX >= lenN || changedY < 0 || changedY >= lenN) continue;
      else if (map[changedX][changedY] && !visited[changedX][changedY]) {
        queue.push([changedX, changedY]);
        visited[changedX][changedY] = true;
        result++;
      }
    }
  }
  return result;
};

for (let i = 0; i < lenN; i++) {
  map[i] = input[i].split('').map(Number);
  visited[i] = new Array(lenN).fill(false);
}

for (let i = 0; i < lenN; i++) {
  for (let j = 0; j < lenN; j++) {
    if (map[i][j] && !visited[i][j]) {
      output.push(bfs(i, j));
    }
  }
}

console.log(output.length);
output.sort((a, b) => a - b);
for (let j = 0; j < output.length; j++) {
  console.log(output[j]);
}
