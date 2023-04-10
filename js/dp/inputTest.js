let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let num = Number(input);

for (let i = 1; i <= num; i++) {
  console.log(i);
}
