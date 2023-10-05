function solution(targets) {
    let answer = 1;
    targets.sort((a,b)=>{
        if(a[1] === b[1]){
            return b[0] - a[0];
        }
        return a[1] - b[1];
    });
    // console.log("targets:>>, ", targets)
    let currentShoot = targets[0];
    for(let i = 1; i< targets.length; i++){
        const currentTarget = targets[i];
        if(currentTarget[0] < currentShoot[1]){
            continue;
        }else{
            currentShoot = currentTarget;
            answer++;
        }
    }
    return answer;
}