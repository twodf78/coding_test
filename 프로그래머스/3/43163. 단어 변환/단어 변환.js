const isChangeable = (source, target) =>{
    let different = 0;
    for(let i = 0; i< target.length; i++){
        if(source[i] !== target[i]) different++;
        if(different > 1) return;
    }
    return different === 1;
}

function solution(begin, target, words) {
    if(words.indexOf(target) === -1) return 0;
    
    const dfs = (sourceList, count) =>{
        const nextSource = [];
        while(sourceList.length > 0){
            const source = sourceList.shift();
            
            for(let i = 0; i< words.length; i++){
                const word = words[i];
                if(isChangeable(source, word)){
                    if(word === target){
                        return count + 1;
                    }
                    words = words.filter((v, idx)=>idx !== i);
                    nextSource.push(word);
                    i--;
                }             
            }
        }

        if(nextSource.length > 0){
            return dfs(nextSource, count + 1);
        }
        return 0;
    }    
    
    return dfs([begin], 0);
}