process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(let i = 1; i<= b; i++){
        let star="";
        for(let i = 1; i<= a; i++){
            star+="*";
        }
        console.log(star);
        
    }
});