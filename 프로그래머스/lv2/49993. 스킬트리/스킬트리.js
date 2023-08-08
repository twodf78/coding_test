function solution(skill, skill_trees) {
    let answer = 0;
    const skillObj = {};
    skill.split("").forEach((x,i)=>{
        skillObj[x] = i;
    })
    
    skill_trees.forEach((tree)=>{
        const treeArr = tree.split("");
        let previous = -1;
        for(let i = 0 ; i< treeArr.length; i++){
            const currentSkill = treeArr[i];
            if(skillObj[currentSkill] === undefined) continue;
            if(previous === skillObj[currentSkill] - 1){
                previous = skillObj[currentSkill]; 
            }else {
                answer--;
                break;
            }
        }
        answer++;
    })
    return answer;
    
}