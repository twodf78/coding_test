const { dir } = require('console');
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const [M, N] = input.shift().split(' ').map(Number);

const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const visited = new Array(N).fill().map((e1) => new Array(M).fill(false));
let nextTime = new Array(N).fill().map((e1) => new Array(M).fill(false));

const box = new Array(N).fill().map((e1) => new Array(M).fill(0));
let somethingChanged = true;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    box[i] = input[i].split(' ').map(Number);
  }
}

//x - j - M  // y - i - n
const bfs = (startX, startY) => {
  const queue = [[startX, startY]];
  const [standardX, standardY] = queue.shift();
  for (let i = 0; i < 4; i++) {
    let x = standardX + direction[i][0];
    let y = standardY + direction[i][1];
    if (x < 0 || y < 0 || x >= M || y >= N) continue;
    else {
      if (box[y][x] === 0 && !visited[y][x] && !nextTime[y][x]) {
        queue.push([x, y]);
        box[y][x] = 1;
        nextTime[y][x] = true;
        somethingChanged = true;
      }
    }
  }
};

const refresh = () => {
  nextTime = new Array(N).fill().map((e1) => new Array(M).fill(false));
};
const oneRound = () => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (box[i][j] === 1 && !visited[i][j] && !nextTime[i][j]) {
        bfs(j, i);
        visited[i][j] = true;
      }
    }
  }
  refresh();
};

const isAllTomatoDone = () => {
  for (let i = 0; i < N; i++) {
    if (box[i].includes(0)) {
      return false;
    }
  }
  return true;
};
let result = 0;
while (somethingChanged) {
  somethingChanged = false;
  //   console.log('box :>> ', box);
  oneRound();
  if (!somethingChanged) break;
  result++;
}

isAllTomatoDone() ? console.log(result) : console.log(-1);
