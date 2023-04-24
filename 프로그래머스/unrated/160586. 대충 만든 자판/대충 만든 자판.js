let letterDict = {};

function solution(keymap, targets) {
    var answer = [];
    
    for(let i = 0; i<keymap.length; i++){
        const keymapItem = keymap[i];
        for(let j = 0; j< keymapItem.length; j++){
            const letter = keymapItem[j];
            if(!letterDict[letter]){
                letterDict[letter] = j+1;
            }
            else if(letterDict[letter] && letterDict[letter] > j){
                letterDict[letter] = j+1;
            }
        }
    }

    for(let i = 0; i<targets.length; i++){
                
        const target = targets[i];
        let temp = 0;
        let isMinusOne = false;
        for(let j = 0; j< target.length; j++){
            const letter = target[j];
            
            if(!letterDict[letter]){
                answer.push(-1);
                isMinusOne= true;
                break;
            }
            else{
                temp += letterDict[letter];
            }
        }
        if(!isMinusOne){
            answer.push(temp);
            
        }
    }
    return answer;
}