const weaponPower = (num) =>{
    let sum = 2;
    const sqrt = Math.sqrt(num);
    for(let i = 2; i<sqrt; i++){
        if(num% i === 0) sum += 2;
    }
    return sqrt === parseInt(sqrt , 0) ? sum + 1 : sum;
}
function solution(number, limit, power) {
    let ironWeight = 0;
    for(let i = 2; i<= number; i++){
        const currentPower = weaponPower(i); 
        ironWeight += (currentPower > limit ? power : currentPower);
    }
    return ironWeight + 1;
}