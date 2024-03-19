function solution(numbers, target) {
    if(numbers.length === 1) return numbers[0] === target ? 1 : 0
    let count = 0;
    const bfs = (queue) =>{
        count++;
        const newQueue = [];
        for(let i = 0; i<queue.length; i++){
            const num = queue[i];
            newQueue.push(num + numbers[count]);
            newQueue.push(num - numbers[count]);
        }
        if(count >= numbers.length - 1){
            return newQueue.filter((v)=>v===target).length;
        }else{
            return bfs(newQueue)
        }
    }
    return bfs([numbers[0], -numbers[0]]);
}