function solution(N, road, K) {
    let answer = 1;
    const MaxDistance = 500000 * 2000 * 50;
    const townDistance = {};
    const townClosed = new Array(N + 1).fill(0).map((v)=>[]);
    townDistance[1] = 0;
    for(let i = 2; i<=N;i++){
        townDistance[i] = MaxDistance;
    }
    road.forEach((v, i)=>{
        townClosed[road[i][0]].push([road[i][1], road[i][2]])
        townClosed[road[i][1]].push([road[i][0], road[i][2]])
    })
    
    const queue = [[1, 0]];
    while (queue.length) {
        const [to, time] = queue.shift();
        townClosed[to].forEach((next)=>{
            if(townDistance[next[0]] > townDistance[to] + next[1]){
                townDistance[next[0]] = townDistance[to] + next[1];
                queue.push(next)
            }
        })
    }
    return  Object.values(townDistance).filter((item) => item <= K ).length;
}
