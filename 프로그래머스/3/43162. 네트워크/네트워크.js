function solution(n, computers) {
    const visited = [...new Array(n).fill(false)];
    
    const bfs = (queue) => {
        const newQueue = [];
        while(queue.length > 0){
            const currentIdx = queue.shift();
            visited[currentIdx] = true;
            
            const currentComputer = computers[currentIdx];
            
            for(let i = 0; i<n; i++){
                if(visited[i] === false && computers[currentIdx][i] === 1){
                    newQueue.push(i);
                }
            }
            queue = newQueue;
        }
        
    }
    let answer = 0;
    let unvisitedList = visited.filter((x)=>!x);
    while(unvisitedList.length > 0){
        
        let queue = [visited.indexOf(false)];
        
        bfs(queue);
        answer++;
        unvisitedList = visited.filter((x)=>!x);
        
    }
    return answer;
}