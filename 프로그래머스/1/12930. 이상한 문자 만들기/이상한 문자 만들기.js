function solution(s) {
    const letters = s.split(" ");
    const answer= [];
    for(let letter of letters){
        const res = letter.split("").map((v,i)=>{
            if(i %2 ===0){
                return v.toUpperCase();
            }else{
                return v.toLowerCase();
            }
        }).join("");
        answer.push(res);
    }
    return answer.join(" ");
}