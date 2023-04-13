let sum = 0;
let start = 0;

const drawback = (k, sequence) => {
  while (sum > k) {
    sum -= sequence[start];
    if (start >= sequence.length - 1) return;
    start++;
  }
};

function solution(sequence, k) {
  var answer = [];

  const sumSequence = sequence.map((e1, idx) => [e1, 0]);
  let output = [];

  for (let i = 0; i < sequence.length; i++) {
    sum += sequence[i];

    if (sum < k) {
      continue;
    } else if (sum > k) {
      drawback(k, sequence);
    } else if (sum === k) {
      if (output.length === 0) output = [start, i];
      let previousMinus = output[1] - output[0];
      if (previousMinus > i - start) {
        output = [start, i];
      }
      start++;
      sum -= sequence[start];
    }
  }
  return output;
}
