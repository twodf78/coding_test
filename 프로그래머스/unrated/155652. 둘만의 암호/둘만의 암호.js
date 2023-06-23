const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
function solution(s, skip, index) {
    for(let i=0;i<skip.length; i++){
        const idx = alphabet.indexOf(skip[i]);
        if(idx !== -1){
            alphabet.splice(idx, 1);
        }
    }
    let answer = '';
    
    for(let i = 0; i<s.length;i++){
        const idx = alphabet.indexOf(s[i]);
        const currentIdx = idx + index >= alphabet.length ? (idx + index) % alphabet.length : idx + index;
        answer += alphabet[currentIdx];
    }
    return answer;
}