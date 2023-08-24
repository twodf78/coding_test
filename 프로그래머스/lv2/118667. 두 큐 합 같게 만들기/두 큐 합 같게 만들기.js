function solution(queue1, queue2) {
    const totalArr = [...queue1, ...queue2];
    const maxCount = 4*totalArr.length;
    const sum = (array)=>array.reduce((a,b)=>a+b, 0);
    const targetVal = sum(totalArr)/2;
    
    let count = 0;
    let start = 0,end = queue1.length;
    let totalSum = sum(totalArr.slice(start, end));
    while(count<=maxCount){
        if(targetVal > totalSum){
            totalSum += totalArr[end];
            end++;
        }else if(targetVal < totalSum){
            totalSum -= totalArr[start];
            start++;      
        }else if(targetVal === totalSum){
            return count;
        }
        count++;
    }
    return -1;
}