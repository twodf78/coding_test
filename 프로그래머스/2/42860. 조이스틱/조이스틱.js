const alpha = Array.from({length: 26}, (v, i)=>String.fromCharCode(i + 65));
const alphaMap = {};
alpha.forEach((v, i)=>{
    alphaMap[v] = i;
})
const minWay = (n, from, to) => {
    const big = to > from? to: from;
    const small = to > from? from: to;
    return (big - small) > (n-big + small)? (n-big + small): (big - small);
}

function solution(name) {
    const n = name.length;
    const dp = Array.from({length: n}, _ => 0);
    const nameList = name.split("");
    const visit = Array.from({length: n}, (v, i) => nameList[i]==="A");
    
    //초기 세팅
    const dpSet = (idx, newDP, newVisit) =>{
        for(let i = 0; i<n; i++){
            newDP[i] = newVisit[i] ? 100 : minWay(n, idx, i);
        }
    }
    
    dpSet(0, dp, visit);

    let res = 0;

    const dfs = (idx, newDP, newVisit) => {
        let sum = minWay(26, alphaMap["A"], alphaMap[nameList[idx]]);
        let front = idx;
        let back = idx;
        newVisit[idx] = true;
        for(let i = 0; i< n; i++) {
            front+= 1;
            if(front>= n){
                front = 0;
            }
            if(!newVisit[front]) break;
        }
        
        for(let i = 0; i< n; i++) {
            back-= 1;
            if(back < 0){
                back = n-1;
            }
            if(!newVisit[back]) break;
        }
        
        if(front === idx && back === idx){
            return sum;
        }else if(front === back){
            return sum + newDP[front]  + minWay(26, alphaMap["A"], alphaMap[nameList[front]]);
        }else {
            const frontDP = [...newDP];
            const frontVisit = [...newVisit];
            dpSet(front, frontDP, frontVisit);
            
            const backDP = [...newDP];
            const backVisit = [...newVisit];
            dpSet(back, backDP, backVisit);
            
            const frontRes = sum + newDP[front] + dfs(front, frontDP, frontVisit);
            const backRes = sum + newDP[back] + dfs(back, backDP, backVisit);

            
            sum = Math.min(frontRes, backRes);
        }
        return sum;
    }
    return dfs(0, dp, visit);
}

