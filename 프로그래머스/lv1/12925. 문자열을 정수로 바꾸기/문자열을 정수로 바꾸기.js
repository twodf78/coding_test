function solution(s) {
    let answer = parseInt(s);
    if(!answer) answer = -parseInt(s.slice(1, s.length));
    return answer;
}