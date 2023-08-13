const isPrime = (num) =>{
    if(num === 1 || num === undefined) return false;
    if(num === 2 || num === 3) return true;
    for(let i = 2; i<= Math.ceil(Math.sqrt(num)) ; i++){
        if(num % i === 0) return false;
    }
    return true;
}
function solution(n, k) {
    var answer = 0;
    const arr = n.toString(k).split("");
    let current = ""
    arr.forEach((x, i)=>{
        if(x==="0"){
            if(isPrime(current ? parseInt(current) : undefined)){
                answer++;
            }
            current = "";
        }else if(i === arr.length - 1){
            current += x;
            if(isPrime(current ? parseInt(current) : undefined)){
                answer++;
            }
        }else {
            current += x;
        }
        
    })
    return answer;
}