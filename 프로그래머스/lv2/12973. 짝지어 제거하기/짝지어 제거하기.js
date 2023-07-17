function solution(s) {
    const arrS = s.split('');
    const stack = [];
    for (let i = arrS.length - 1; i >= 0; i--)
        if (arrS[i] === stack.at(-1)){
            stack.pop();
        }
        else{
            stack.push(arrS[i]);
        }
    return stack.length === 0 ? 1 : 0
}