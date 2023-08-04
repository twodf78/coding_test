function solution(fees, records) {
    let answer = [];
    const endMin = 23 * 60 + 59; 
    const [basicMin, basicFee, extraMin, extraFee] = fees;    
    const recordArr= {};
    
    records.forEach((record)=>{
        const [time, carNum, inOrOut] = record.split(" ");
        const min = parseInt(time.split(":")[0]) * 60 + parseInt(time.split(":")[1]); 
        
        if(!recordArr[carNum]){
            recordArr[carNum] = 0;
        }
        if(inOrOut === "IN"){
            recordArr[carNum] +=(endMin - min); 
        }else{
            recordArr[carNum] -=(endMin - min); 
        }
    })
    const totalArr = [...Object.entries(recordArr).sort((a,b)=>parseInt(a[0]) - parseInt(b[0]))];
    totalArr.forEach((total) =>{
        if(total[1] <= basicMin){
            answer.push(basicFee)
        }else{
            answer.push(basicFee + Math.ceil((total[1] - basicMin) / extraMin) * extraFee)
        }
    })
    return answer;
}