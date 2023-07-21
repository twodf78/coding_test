function solution(arr) {
    var answer = 0;
    arr.sort((a,b)=>a-b);
    const maxNum = arr.pop();
    let mul = 1;
    let currentMax = maxNum * mul;

    for (let i = 0; i<arr.length; i++){
       if(currentMax % arr[i] !== 0){
           i = 0;
           mul += 1;
           currentMax = maxNum * mul;
       } 
    }
    return currentMax;
}