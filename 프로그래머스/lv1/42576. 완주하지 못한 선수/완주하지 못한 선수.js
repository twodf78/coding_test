function solution(participant, completion) {
    participant.sort((a,b)=>a<b ? -1 : 1);
    completion.sort((a,b)=>a<b? -1 : 1);
    let i =0;
    while(participant.length>0){
        if(completion[i]!==participant[i]){
            break;
        }
        i++;
    }
    return participant[i];
}