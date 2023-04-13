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

const test = new Array(N).fill(0);

console.log(test);

test.forEach((e1, idx) => {
  console.log(idx);
});

// Dictionary 사용하는 방법
var dictObject = {};
dictObject['banana'] = '바나나';
dictObject['hong'] = '홍';
dictObject['monkey'] = '원숭이';
console.log(dictObject); // Object {banana: "바나나", hong: "홍", monkey: "원숭이"}

// Dictionary 출력
for (var key in dictObject) {
  console.log('key : ' + key + ', value : ' + dictObject[key]);
}

// Dictionary 추가, 제거
dictObject['elephant'] = '코끼리'; // 추가
delete dictObject['elephant']; // 삭제 (제대로 삭제 되면 true, 아니면 false)

// 모든 key를 가져오는 방법
Object.keys(dictObject); // ["banana", "hong", "monkey"]

// Dictionary 길이 구하는 방법
Object.keys(dictObject).length; // 3

// key를 체크하는 방법
'moneky' in dictObject; // true
'elephant' in dictObject; // false

// key의 마지막 값 가져오는 방법
var lastKey = Object.keys(dictObject)[Object.keys(dictObject).length - 1];
console.log('last key = ' + lastKey);

console.log(typeof Object.values(dictObject));
