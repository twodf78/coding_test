function solution(n) {
  let a = Array(n).fill().map((v, i) => Array(i + 1).fill())
  let row = -1, col = 0, fill = 0;
  for (let i = n; i > 0; i -= 3) {
    for (let j = 0; j < i; j++) a[++row][col] = ++fill
    for (let j = 0; j < i - 1; j++) a[row][++col] = ++fill
    for (let j = 0; j < i - 2; j++) a[--row][--col] = ++fill
  }
  return a.flat()
}