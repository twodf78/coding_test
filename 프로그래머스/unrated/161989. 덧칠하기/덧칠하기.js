function solution(n, m, section) {
    var answer = 1;
    let reachedArea = section[0] + m;
    section.forEach((x)=>{
        if(x >= reachedArea) {
            reachedArea = x + m;
            answer++;
        }
    })
    return answer;
}