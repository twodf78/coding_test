const converter = (i, j) => {
    return i.toString() + j.toString();
}
const dict ={};

for(let i = -5; i<= 5;i++){
    for(let j = -5; j<= 5;j++){
        dict[converter(i, j)] = [];    
    }
}

function solution(dirs) {
    var answer = 0;
    let current = [0,0];
    for(const dir of dirs.split("")){
        let previous = converter(current[0], current[1]);
        
        if(dir === "U"){
            if(current[1]+1 > 5) continue;
            current = [current[0],current[1]+1 > 5 ? 5 : current[1]+1];
        }
        else if(dir === "D"){
            if(current[1]-1 < -5 ) continue;
            current = [current[0],current[1]-1 < -5 ? -5 : current[1]-1];
        }
        else if(dir === "R"){
            if(current[0] + 1 > 5 ) continue;
            current = [current[0] + 1 > 5 ? 5 : current[0] + 1 ,current[1]];
        }
        else if(dir === "L"){
            if(current[0] - 1< -5 ) continue;
            current = [current[0] - 1< -5 ? -5 : current[0] - 1 ,current[1]];
        }
        if(!dict[converter(current[0], current[1])].includes(previous) && !dict[previous].includes(converter(current[0], current[1]))){
            dict[converter(current[0], current[1])].push(previous);
            answer++;
        }
    
    }

    return answer;
}