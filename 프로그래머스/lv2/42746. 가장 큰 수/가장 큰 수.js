function solution(numbers) {
    var answer = '';
    const newArr = numbers.map(x=>x.toString());
    newArr.sort((a,b)=>{
        return Number(a + b) - Number(b+a);
    });
    const sortedArr = newArr.reverse().map(x=>{
        answer += x;
        return x;
    });
    
    return sortedArr[0] == 0 ? "0" : answer;
}