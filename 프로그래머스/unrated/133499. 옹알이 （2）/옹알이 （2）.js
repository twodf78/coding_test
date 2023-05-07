const able = {};
able["aya"] = 1;
able["ye"] = 1;
able["woo"] = 1;
able["ma"] = 1;
const keys = Object.keys(able);

function solution(babbling) {
    var answer = 0;
    babbling.forEach((word)=>{
        if(able[word]){
            answer+=1;
        }else{
            let current = '';
            let previous = '';
            for(let i = 0; i< word.length;i++){
                current += word[i];
                if(keys.includes(current) && previous !== current) {
                    previous = current;
                    current = '';
                    if(i === word.length -1)answer += 1;
                };
            }
            
        }
        
    })
    return answer;
}