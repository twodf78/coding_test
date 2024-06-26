function solution(N, road, K) {
  const arr = Array.from(Array(N + 1), _ => Infinity);
  const lines = Array.from(Array(N + 1), _ => []);

  road.forEach(([a, b, c]) => {
    lines[a].push({ to: b, cost: c });
    lines[b].push({ to: a, cost: c });
  });

  let queue = [{ to: 1, cost: 0 }];
  arr[1] = 0;

  while (queue.length) {
    let { to } = queue.pop();
    lines[to].forEach((next) => {
      if (arr[next.to] > arr[to] + next.cost) {
        arr[next.to] = arr[to] + next.cost;
        queue.push(next);
      }
    });
  }

  return arr.filter((item) => item <= K).length; 
}