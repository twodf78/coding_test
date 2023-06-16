function solution(N, stages) {
    var answer = [];
    let arr = [];
    stages.sort((a,b)=>a-b);
    for(let i = 1; i<= N; i++){
        let failNum = 0;
        const total = stages.length;
        while(stages[0]<=i){
            failNum++;
            stages.shift();
        }
        arr.push({
            failrate: failNum/total,
            idx: i,
        });
    }
    console.log(arr);
    arr.sort((a,b) =>{
        if(a.failrate === b.failrate){
            return a.idx - b.idx;
        }
        else {
            return b.failrate - a.failrate ;
        }
    })
    return arr.map((x)=>x.idx);
}