function solution(n, left, right) {
  return new Array(right - left + 1).fill(0).reduce((arr, v, i) => {
    arr.push(Math.max((i + left) % n, parseInt((i + left) / n)) + 1);
    return arr;
  }, []);
}