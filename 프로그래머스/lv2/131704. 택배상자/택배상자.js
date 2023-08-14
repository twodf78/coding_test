function solution(order) {
    let answer = 0;
    const assistant = [];
    let sequence = 0;
    for(let  i = 1; i<= order.length; i++){
        const current = order[sequence];

        if(i == current){
            answer+=1;
            sequence++;
        }else{
            if(assistant && assistant.at(-1) == current){
                assistant.pop();
                answer+=1;
                sequence++;
                i--;
            }else{
                assistant.push(i);
            }
        }
        if(sequence >= order.length) break;

    }
    while(assistant.length>0){
        if(sequence >= order.length) break;
        const current = order[sequence];
        if(assistant.at(-1) != current) break;
        assistant.pop();
        answer+=1;
        sequence++;
    }
    return answer;
}