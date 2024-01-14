function solution(n) {
    let answer = 0;
    const arr = new Array(n+1).fill(true);
    
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(!arr[i]){
            continue; 
        }
        for(let k = i ** 2; k <= n; k += i){
            arr[k] = false;
        }
    }
    return arr.filter((x)=>x).length - 2;
}