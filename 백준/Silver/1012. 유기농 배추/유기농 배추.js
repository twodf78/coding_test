const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
let graph, xMax, yMax, c;
let tc = Number(input.shift());

const putWorms = () => {
  let result = 0;
  for (let i = 0; i < yMax; i++) {
    for (let j = 0; j < xMax; j++) {
      if (graph[i][j]) {
        bfs(i, j);
        result++;
      }
    }
  }
  console.log(result);
};

const bfs = (startX, startY) => {
  const queue = [[startX, startY]];
  while (queue.length) {
    const [x, y] = queue.shift();
    if (!graph[x][y]) continue;
    else graph[x][y] = 0;

    for (let i = 0; i < 4; i++) {
      const xPos = x + ds[i][0];
      const yPos = y + ds[i][1];

      if (xPos < 0 || yPos < 0 || xPos >= yMax || yPos >= xMax) continue;
      if (graph[xPos][yPos]) queue.push([xPos, yPos]);
    }
  }
};

for (let i = 0; i < tc; i++) {
  [xMax, yMax, c] = input.shift().split(' ').map(Number);

  graph = [...Array(yMax)].map((e) => Array(xMax).fill(0));

  for (let j = 0; j < c; j++) {
    let [cx, cy] = input[j].split(' ').map(Number);
    graph[cy][cx] = 1;
  }
  putWorms();
  input = input.slice(c);
}
