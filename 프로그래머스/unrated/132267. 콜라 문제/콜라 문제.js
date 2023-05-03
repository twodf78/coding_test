function solution(a, b, n) {
    let answer = 0;
    let restBottle = n;
    let crntChange = 0;
    while(restBottle>=a){
        crntChange = parseInt(restBottle/a) * b;
        restBottle = (restBottle % a) + crntChange;
        answer += crntChange;
    }
    return answer;
}