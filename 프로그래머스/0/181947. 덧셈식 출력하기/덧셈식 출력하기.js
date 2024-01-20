const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const a = input[0];
    const b = input[1];
    let ans = Number(input[0]) + Number(input[1]);
    ans = String(ans);
    console.log(a + " + " + b+ " = "+ans);
});