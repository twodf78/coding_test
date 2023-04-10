const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let input = []
rl.on("line", (line) => {
    // 공백을 기준으로 
    input = line.split(' '); 
    rl.close();
});
 
rl.on('close', () => {
    input.forEach(el => {
        console.log(el);
    })
    process.exit();
})
// > 1 2 3 (문자열)
// 1
// 2
// 3