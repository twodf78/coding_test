function solution(picks, minerals) {
    let answer = 0;
    const minerCount = {};
    minerCount["diamond"] = picks[0];
    minerCount["iron"] = picks[1];
    minerCount["stone"] = picks[2];
    const maxCount = picks[0] + picks[1] + picks[2];
    
    const mineralCount = [];
    for(let i = 0; i<minerals.length; i+=5){
        if(maxCount < i/5 + 1) break;
        let diaCnt = 0, ironCnt = 0, stoneCnt = 0;
        for(let j = i; j< i + 5 && j<minerals.length; j++){
            const crntMineral = minerals[j];
            if(crntMineral === "diamond") {
                diaCnt++;
            }
            else if(crntMineral === "iron"){
                ironCnt++;
            }
            else if(crntMineral === "stone") {
                stoneCnt++;
            }
        }
        mineralCount.push({
            "diamond": diaCnt,
            "iron": ironCnt,
            "stone": stoneCnt,
            "maxTiredRate": diaCnt * 25 + ironCnt * 5 + stoneCnt * 1,
        })
    } 
    mineralCount.sort((a,b)=>{
        return b.maxTiredRate - a.maxTiredRate;
    })
    mineralCount.forEach((item)=>{
        if(minerCount["diamond"]>0){
            minerCount["diamond"]--;
            answer+=(item.diamond + item.iron + item.stone);
        }else if(minerCount["iron"]>0){
            minerCount["iron"]--;
            answer+=(item.diamond * 5 + item.iron + item.stone);
        }else if(minerCount["stone"]>0){
            minerCount["stone"]--;
            answer+=(item.diamond * 25 + item.iron * 5 + item.stone);
        }
    })
    
    return answer;
}