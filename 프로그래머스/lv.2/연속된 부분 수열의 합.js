function solution(sequence, k) {
  var answer = [];

  const sumSequence = sequence.map((e1, idx) => [e1, 0]);
  let output = [];
  let sum = 0;
  let start = 0;
  for (let i = 0; i < sequence.length; i++) {
    let currentSequence = sumSequence[i];
    for (let j = i; j < sequence.length; j++) {
      let currentVal = sequence[j];
      currentSequence[1] += currentVal;
      if (currentSequence[1] > k) break;
      else if (currentSequence[1] < k) continue;
      else if (currentSequence[1] === k) {
        if (output.length === 0) output = [i, j];
        let [previousI, previousJ] = output;
        let previousMinus = output[1] - output[0];
        if (previousMinus > j - i) {
          output = [i, j];
        }
      }
    }
  }
  return output;
}
