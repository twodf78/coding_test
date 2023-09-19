function solution(cards) {
    let answer = 0;
    const caseNum = [];
    const visited = {};
    cards.forEach((card)=>{
        visited[card] = false;
    })
    for(let i = 0; i< cards.length;i++){
        if(visited[i + 1]) continue;
        let count = 1;
        let currentCard = cards[i];
        visited[i+1]= true;
        while(!visited[currentCard]){
            visited[currentCard] = true;
            currentCard = cards[currentCard - 1];
            count++;
        }
        caseNum.push(count);
    }
    caseNum.sort((a,b)=>b-a);
    return caseNum.length < 2 ? 0 : caseNum[0] * caseNum[1];
}