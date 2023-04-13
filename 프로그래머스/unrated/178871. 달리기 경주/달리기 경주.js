function solution(players, callings) {

    const playerDict = {};
    players.forEach((player,idx) =>{
        playerDict[player] = idx;
    })
    callings.forEach((call)=>{
        let currentIdx = playerDict[call];
        let temp = players[currentIdx -1];
        
        players[currentIdx] =  temp;
        players[currentIdx-1] =  call;
        
        playerDict[temp] = currentIdx;
        playerDict[call] = currentIdx-1;
        
    })
    return players;
}