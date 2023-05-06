const numberConverter = {};
numberConverter["zero"]=0;
numberConverter["one"]=1;
numberConverter["two"]=2;
numberConverter["three"]=3;
numberConverter["four"]=4;
numberConverter["five"]=5;
numberConverter["six"]=6;
numberConverter["seven"]=7;
numberConverter["eight"]=8;
numberConverter["nine"]=9;

function solution(s) {
    let answer = "";
    let tempWord = '';
    const arrS = s.trim().split("");
    arrS.forEach((item)=>{
        if(Number(item) || Number(item) === 0) {
            answer+= String(item);
        }
        else{
            tempWord += item;
            if(numberConverter[tempWord] || numberConverter[tempWord] === 0){
                answer += String(numberConverter[tempWord]);
                tempWord = '';
            }
        }
    
    });
    return Number(answer);
}