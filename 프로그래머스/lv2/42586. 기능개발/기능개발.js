function solution(progresses, speeds) {
    let answer = [];
    const days = progresses.map((progress,i)=> Math.ceil((100 - progress) / speeds[i]));
    let day= days[0];
    let developedDayCount = 0;
    days.forEach((x)=>{
        if(day >= x){
            developedDayCount++;
        }
        else{
            day = x;
            answer.push(developedDayCount);
            developedDayCount = 1;
        }
    })
    if(developedDayCount){
        answer.push(developedDayCount);
    }
    return answer;
}