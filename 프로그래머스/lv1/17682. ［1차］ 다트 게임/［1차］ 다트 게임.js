function solution(dartResult) {
    let totalScore = 0;
    let current = 0;
    let previous = 0;
    let isNumber = false;
    const arr = dartResult.split("");
    arr.forEach((dart)=>{
       if(!isNaN(dart)){
           previous = current;
           current = isNumber ? 10 : Number(dart);
           isNumber = true;
       }else {
           if(dart ==='#'){
               totalScore -= current;
               current = -1 * current;
               totalScore += current;
           }else if(dart === '*'){
               totalScore -= current;
               totalScore -= previous;
               current *=2;
               previous *= 2;
               totalScore += current + previous;
           }else if(dart=== 'S'){
               totalScore += current;
           }else if(dart=== 'D'){
               current *=current;
               totalScore += current;
           }else if(dart=== 'T'){
               current *=current* current;
               totalScore += current;
           }
           isNumber = false;
       }
        console.log(totalScore)
    })
    return totalScore;
}