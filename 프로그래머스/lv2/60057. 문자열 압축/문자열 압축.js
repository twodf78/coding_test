const solution = (s) => {
    let answer = s.length; 
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
      let temp = "", cnt = 1;

      for (let j = 0; j < s.length; j += i) {
        let s1 = s.slice(j, j + i);

        while (true) {
          j += i;
          let s2 = s.slice(j, j + i);
          if (s1 === s2) {
            cnt++;
          } else {
            break;
          }
        }

        temp += cnt > 1 ? cnt + s1 : s1;
        j -= i;
        cnt = 1;
      }
      answer = Math.min(temp.length, answer);
    }
    return answer;
};