function solution(n) {
    var answer = [];
    let increaseNum = 1;
    for(let i = 1; i<=n; i++){
        if(i === n){
            answer.push(new Array(i).fill(i).map((x, i)=> increaseNum++));
            break;
        }
        answer.push(new Array(i).fill(i).map((x, i)=>i===0 ? increaseNum++ : "/"));
    }
    let k = 1;
    while(k<n-1){
        k++;
        if(k%2===0){
            for(let i = n - (k/2) -1 ; i>=k/2;i--){
                if(answer[i][answer[i].length - k/2] !== "/")continue;
                answer[i][answer[i].length - k/2] = increaseNum++;
            }
        }
        else{
            
            for(let i = Math.ceil(k/2); i<= n - Math.ceil(k/2); i++){
                if(i === n - Math.ceil(k/2)){
                    
                    for(let j = Math.floor(k/2); j<= answer[i].length - Math.ceil(k/2); j++){
                        if(answer[i][j] !== "/")continue;
                        answer[i][j] = increaseNum++;
                    }
                    break;
                }
                if(answer[i][Math.floor(k/2)] !== "/")continue;
                answer[i][Math.floor(k/2)] = increaseNum++;;
            }
        }
    }

    return answer.reduce((acc, cur)=> {
        return acc.concat(cur);
    }, []);
}