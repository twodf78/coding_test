function solution(food) {
    var answer = '';
    let temp = [];
    for(let i = 1; i<food.length;i++){
        for(let j=0; j< parseInt(food[i]/2); j++){
            answer += String(i);
        }
    }
    let splitString = answer.split(""); 
    let reverseArray = splitString.reverse();
    let joinString = reverseArray.join("");
    return answer + "0" + joinString;
}