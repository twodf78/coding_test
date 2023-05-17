function solution(x) {
    var answer = true;
    let sum = 0;
    const arrX = x.toString().split("");
    arrX.forEach((num)=>{
        sum += Number(num);
    })
    console.log(sum)
    return (x % sum === 0);
}