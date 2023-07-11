function solution(n, words) {
    var answer = [];
    let count = 1;
    const dict = {};
    for(let i = 0; i< words.length; i++){
        const word = words[i];
        if(dict[word] === undefined){
            dict[word] = 1;
        }else{
            answer.push((i+1)%n === 0 ? n : (i+1)%n);
            answer.push(count);
            break;
        }
        if(i>0){
            const previousLastLetter = words[i-1].split("").pop();
            const currentFirstLetter = word.split("").shift();
            if(currentFirstLetter!==previousLastLetter){
                answer.push((i+1)%n === 0 ? n : (i+1)%n);
                answer.push(count);
                break;
            }
        }
        
        if((i+1)%n===0) {
            count++;        
        }
    }
    return answer.length === 0 ? [0,0] : answer;
}