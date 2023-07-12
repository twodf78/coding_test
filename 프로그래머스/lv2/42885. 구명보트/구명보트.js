function solution(people, limit) {
    let answer = 0;
    people.sort((a,b)=>a-b);
    while(people.length > 0){
        if(1 === people.length){
            people.pop();
            answer++;
            break;
        }
        if(people[0] + people[people.length-1] > limit){
            people.pop();
            answer++;
        }
        else{
            people.pop();
            people.shift();
            answer++;
        }
    }
    return answer;
}