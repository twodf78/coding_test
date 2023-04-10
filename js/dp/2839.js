const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;
let count = 0;
rl.on('line', (line) => {
  input = parseInt(line);
  while (true) {
    if (input % 5 === 0) {
      console.log(input / 5 + count);
      break;
    }

    if (0 > input) {
      console.log(-1);
      break;
    }

    count++;
    input -= 3;
  }

  rl.close();
}).on('close', function () {
  process.exit();
});
