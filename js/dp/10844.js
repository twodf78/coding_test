const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
let n = parseInt(input);

console.log(n);
const dp = new Array(100).fill(true);

console.log(dp.length);
