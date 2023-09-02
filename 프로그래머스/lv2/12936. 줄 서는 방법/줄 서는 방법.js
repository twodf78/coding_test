function solution(n, k) {
    const nArr = new Array(n).fill(0).map((v, i)=>i + 1);
    const answer = [];
    for (let i = 1; i <= n; i++) {
        let divider = 1;

        for (let j = 1; j <= n - i; j++) {
            divider *= j;
        }
        const idx = Math.ceil(k / divider) - 1;
        const popValue = nArr.splice(idx, 1)[0];
        answer.push(popValue);
        k -= divider * idx; 
    }
    return answer;
}