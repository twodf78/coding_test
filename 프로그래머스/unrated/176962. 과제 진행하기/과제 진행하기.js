function solution(plans) {
    const inProcess = [];
    const done = [];
    const hourToMin = (time) =>{
        return Number(time.split(":")[0]) * 60 + Number(time.split(":")[1]);
    }
    const sortedPlans = plans.map((plan)=>{
        return{
            name: plan[0],
            start: hourToMin(plan[1]),
            playtime: Number(plan[2])
        }
    }).sort((a,b)=>a.start - b.start);

    for(let time = sortedPlans[0].start; time< 24 * 60; time++){
        if(sortedPlans.length === 0) break;
        if(inProcess.length > 0){
            const inProcessPlan = inProcess.at(-1); 
            if(inProcessPlan.start + inProcessPlan.playtime === time){
                done.push(inProcess.pop().name);
                if(inProcess.length > 0) inProcess[inProcess.length - 1].start = time; 
            }
        }
        if(time === sortedPlans[0].start){

            
            const incomingPlan = sortedPlans.shift();
            if(inProcess.length === 0){
                inProcess.push(incomingPlan);
            }
            else{
                inProcess[inProcess.length - 1].playtime -= (incomingPlan.start -inProcess[inProcess.length - 1].start); 
                inProcess[inProcess.length - 1].start = time; 
                inProcess.push(incomingPlan);
            }
        }
    }
    while(inProcess.length > 0){
        done.push(inProcess.pop().name);
    }
    return done;
}