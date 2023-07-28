function solution(priorities, location) {
    var answer = 0;
    const dict = [];
    priorities.forEach((v)=>{
        dict.push( v)
    })
    dict.sort((a,b)=> b - a);
    for(let i = 0; i< priorities.length ; i++){
        const current = priorities[i];
        if(current === dict[answer]){
            answer++;
            if(i === location) break;
        }
        if(i === priorities.length-1){
            i = -1;
        }
    }
    return answer;
}