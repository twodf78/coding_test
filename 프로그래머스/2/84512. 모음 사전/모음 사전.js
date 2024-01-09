const dict = {};
dict["A"] = 1;
dict["E"] = 2;
dict["I"] = 3;
dict["O"] = 4;
dict["U"] = 5;

function solution(word) {

    const count = (n) =>{
        let cnt = 1;
        let singleAcc = 0;
        while(n > 1){
            singleAcc += cnt;
            cnt *= 5;
            n--;
        }
        return cnt + singleAcc;
    }
    
    const targetList = word.split("");
    let idx = 5;    
    let answer = 0;
    while(targetList.length>0){
        const currentLetter = targetList.shift();
        const letterOrder = dict[currentLetter];
        answer += count(idx) * (letterOrder-1);
        idx--;
    }
    return answer + word.length;
}