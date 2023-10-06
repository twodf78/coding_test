function solution(n, info) {
  let answer = [-1];
  let winScore = 0;
    
    
  function calcScore(info, result) {
    return info.reduce((a, c, i) => {
      if (c < result[i]) return a + 10 - i;
      else if (c === 0 && result[i] === 0) return a;
      else return a - 10 + i;
    }, 0);
  }
    
  function dfs(n, result, idx) {
    if (n === 0) {
      const score = calcScore(info, result);
      if (winScore < score) {
        winScore = score;
        answer = result;
      }
      return;
    }
      
    for (let i = idx; i < 11; i++) {
      const reali = 10 - i;
      const copy = [...result];
      if (n > info[reali]) {
        copy[reali] = info[reali] + 1;
        dfs(n - copy[reali], copy, i + 1);
      } else {
        copy[10] += n;
        dfs(0, copy, i + 1);
      }
    }
    const copy = [...result];
    copy[10] += n;
    dfs(0, copy, -1);
  }
    
  dfs(n, new Array(11).fill(0), 0);
  return answer;
}