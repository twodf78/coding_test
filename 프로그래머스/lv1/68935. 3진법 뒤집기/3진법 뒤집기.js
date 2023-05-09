function solution(n) {
    var answer = 0;
    const threeNum = n.toString(3);
    const reverse = threeNum.split("").reverse().join("");
    const tenNum = parseInt(reverse, 3); 
    return tenNum;
}