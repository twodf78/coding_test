function solution(survey, choices) {
    var answer = '';
    const test = {};
    test["A"] = 0;
    test["N"] = 0;
    test["J"] = 0;
    test["M"] = 0;
    test["C"] = 0;
    test["F"] = 0;
    test["R"] = 0;
    test["T"] = 0;
    
    survey.forEach((ques, i)=>{
        
        const item = ques.split("");
        const ans = choices[i];
        if(ans > 4){
            test[item[1]] += (ans - 4);
        }else if(ans < 4){
            test[item[0]] += (4 - ans);
        }
    })
    answer += (test["T"] > test["R"] ? "T" : "R");
    answer += (test["F"] > test["C"] ? "F" : "C");
    answer += (test["M"] > test["J"] ? "M" : "J");
    answer += (test["N"] > test["A"] ? "N" : "A");
    return answer;
}