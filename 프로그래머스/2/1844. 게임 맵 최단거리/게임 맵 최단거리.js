function solution(maps) {
    const height = maps.length;  
    const width = maps[0].length;  
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    let min =1;
    const nextMoves = [[0,0]];
    while(nextMoves.length>0){

        const size = nextMoves.length;

        for(let i = 0; i < size; i++) {
            const [n, m] = nextMoves.shift();

            for(let j = 0; j < 4; j++) {
                let nx = n + dx[j];
                let ny = m + dy[j];

                if(nx >= 0 && nx < height && ny >= 0 && ny < width && maps[nx][ny] === 1) {
                    if(nx == height - 1 && ny == width - 1) {
                        return min + 1;
                    }
                    nextMoves.push([nx, ny]);
                    maps[nx][ny] = 0;
                }
            }
        }
        min++;
    }
    
    return -1;
}