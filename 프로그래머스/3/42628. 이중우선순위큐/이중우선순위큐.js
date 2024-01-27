function solution(operations) {
    const queue = [];
    for (let operation of operations){
        const [cmd, num] = operation.split(" ");
        if(cmd === 'I') {
            queue.push(Number(num))
        }
        else {	
            const findValue = (num === '1' ? Math.max : Math.min)(...queue);
            const delIdx = queue.indexOf(findValue);
            queue.splice(delIdx, 1);
        }
    }
    return queue.length ? [Math.max(...queue), Math.min(...queue)] : [0, 0];
}