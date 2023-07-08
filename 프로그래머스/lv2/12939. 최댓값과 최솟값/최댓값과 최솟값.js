function solution(s) {
    let arrS = s.split(" ").map(Number).sort((a,b)=>a-b);
    return arrS.shift().toString() + " "+arrS.pop().toString();
}