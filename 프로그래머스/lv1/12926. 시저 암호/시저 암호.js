function solution(s, n) {
    var answer = '';
    const upperAlphabet = Array(26).fill().map((v, i) => String.fromCharCode(i + 97).toUpperCase());
    const lowerAlphabet = Array(26).fill().map((v, i) => String.fromCharCode(i + 97));
    const upperLength = upperAlphabet.length;
    const lowerLength = lowerAlphabet.length;
    const arr = s.split("");
    for(let i =0; i<arr.length; i++){
        const letter = arr[i];
        const upperIdx = upperAlphabet.indexOf(letter);
        if (upperIdx >= 0){
            answer += upperAlphabet[(upperIdx + n)%upperLength ];
            continue;
        }
        const lowerIdx = lowerAlphabet.indexOf(letter);
        if (lowerIdx >= 0){
            answer += lowerAlphabet[(lowerIdx + n)%lowerLength ];
            continue;
        }
        answer += letter;
            
    }
    return answer;
}