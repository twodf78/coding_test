
function solution(name, yearning, photo) {
    var answer = [];
    const nameToYearningMap = new Map();

    for(let i = 0; i< name.length; i++){
        nameToYearningMap.set( name[i], yearning[i]);
    }
    
    photo.forEach((photoItem)=>{
        let sum = 0;
        photoItem.forEach((person)=>{
            sum += nameToYearningMap.get(person) ?? 0;
            
        })
        answer.push(sum);
    })

    return answer;
}