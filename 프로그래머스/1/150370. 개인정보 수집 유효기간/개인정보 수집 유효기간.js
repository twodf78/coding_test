function solution(today, terms, privacies) {
    var answer = [];
    
    const termsDict = {};
    
    for(let term of terms){
        const [type, month] = term.split(" ");
        termsDict[type] = Number(month);
    }
    
    const deadLine = [];
    let index = 1;
    const [todayYear, todayMonth, todayDay] = today.split(".").map(Number);
    
    
    for(let privacy of privacies){
        const [date, type] = privacy.split(" ");
        let [year, month, day] = date.split(".").map(Number);
        const addMonth = termsDict[type];
        
        month += addMonth;
        day -= 1;
        if(day === 0){
            day = 28;
            month -=1;
        }
        while(month > 12){
            month -= 12;
            year+=1;
        }

        if(year < todayYear){
            answer.push(index);
        }else if(year === todayYear){
            if(month < todayMonth){
                answer.push(index);
            }else if(month === todayMonth){
                if(day< todayDay){
                    answer.push(index);
                }
            }
        }
        
        index++;
    }
    return answer;
}