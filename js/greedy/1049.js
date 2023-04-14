const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
let [N, M] = input[0].split(' ').map(Number);
const sixPrice = [];
const onePrice = [];
for (let i = 1; i < M + 1; i++) {
  const [six, one] = input[i].split(' ').map(Number);
  sixPrice.push(six);
  onePrice.push(one);
}
sixPrice.sort((a, b) => a - b);
onePrice.sort((a, b) => a - b);
const cheapSix = sixPrice.shift();
const cheapOne = onePrice.shift();
let output = 0;
if (cheapOne * 6 < cheapSix) {
  output = cheapOne * N;
} else {
  while (N >= 6) {
    output += cheapSix;
    N -= 6;
  }
  if (cheapSix / N > cheapOne) {
    output += N * cheapOne;
  } else {
    output += cheapSix;
  }
}
console.log(output);
