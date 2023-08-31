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

const arrCount = (arr, exclusion, visited)=>{
  visited[arr[0]] = 1;
    
  for(let i = 0; i< arr[1].length; i++){
      const current = arr[1][i];
      if(current == exclusion) continue;
      if(visited[current]) continue;
      visited = arrCount([current.toString(), wireDict[current]], exclusion, visited);
  }
  return visited;
}

for(let i = 0 ;i< wires.length; i++){
    const [firstTarget, secondTarget] = wires[i];
    
    const firstTargetCount = Object.keys(arrCount([firstTarget.toString(), wireDict[firstTarget]], secondTarget, {})).length; 
    
    const secondTargetCount =  Object.keys(arrCount([secondTarget.toString(), wireDict[secondTarget]], firstTarget, {})).length; 
    
    answer = answer < Math.abs(firstTargetCount- secondTargetCount) ? answer : Math.abs(firstTargetCount- secondTargetCount)
    
}

return answer;
}