function solution(n, wires) {
var answer = n;
const wireDict = {};
wires.forEach((wire)=>{
  if(!wireDict[wire[0]]){
      wireDict[wire[0]] =[];
  }
  if(!wireDict[wire[1]]){
      wireDict[wire[1]] = [];
  }
  wireDict[wire[0]].push(wire[1]);
  wireDict[wire[1]].push(wire[0]);

})
// console.log(wireDict)
const wiresArr = Object.entries(wireDict).sort((a, b)=>b[1].length-a[1].length)
// console.log(wiresArr)

const arrCount = (arr, exclusion, visited)=>{
  visited[arr[0]] = 1;
  // console.log("exclusion",exclusion)
  // console.log("visited",visited)
    
  for(let i = 0; i< arr[1].length; i++){
      const current = arr[1][i];
    // console.log("current",current)
      // console.log("params",[current.toString(), wireDict[current]])
      if(current == exclusion) continue;
      if(visited[current]) continue;

      visited = arrCount([current.toString(), wireDict[current]], exclusion, visited);
  }
  return visited;
}

for(let i = 0 ;i< wires.length; i++){
    const [firstTarget, secondTarget] = wires[i];
          // console.log("111>>>", firstTarget)
          // console.log("111params>>>", [firstTarget.toString(), wireDict[firstTarget]])
    
    const firstTargetCount = Object.keys(arrCount([firstTarget.toString(), wireDict[firstTarget]], secondTarget, {})).length; 
          // console.log("222>>>", secondTarget)
          // console.log("222params>>>", [secondTarget.toString(), wireDict[secondTarget]])
    
    const secondTargetCount =  Object.keys(arrCount([secondTarget.toString(), wireDict[secondTarget]], firstTarget, {})).length; 
          // console.log("firstTargetCount :>>",firstTargetCount)
          // console.log("secondTargetCount :>>",secondTargetCount)
    
    answer = answer < Math.abs(firstTargetCount- secondTargetCount) ? answer : Math.abs(firstTargetCount- secondTargetCount)
          // console.log("answer :>>",answer)
    
}

return answer;
}