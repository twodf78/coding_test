function solution(want, number, discount) {
    var answer = 0;

    for(let i = 0; i< discount.length - 9; i++){
        const tenDays = discount.slice(i, i+10);
        for(let j = 0; j< want.length; j++){
            const count = tenDays.filter((x)=>x === want[j]).length;
            if(count!==number[j]){
                answer--;
                break;
            }
        }
        answer++;
    }
    return answer;
}