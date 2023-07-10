function solution(s) {
    let answer = '';
    const arrS = s.split(" ");
    for (const word of arrS){
        if(word === ' ' || word.length ===0) {
            answer += ' ';
            continue;
        }
        const arrWord = word.split("").map((x)=>x.toLowerCase());
        if(!Number(arrWord[0])){
            arrWord[0] = typeof(arrWord[0]) === 'string' ? arrWord[0].toUpperCase() : arrWord[0];
        }
        answer+= arrWord.join("") + ' ';
    }
    return answer.slice(0,-1);
}