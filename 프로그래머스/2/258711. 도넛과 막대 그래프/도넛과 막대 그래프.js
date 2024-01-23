

function solution(edges) {
    
    edges.sort((a, b)=>{
        if(a[0] === b[0])
            return a[1] - b[1];
        return a[0] - b[0];
    })
    
    const fromList = edges.map(e=>e[0]);
    const toList = edges.map(e=>e[1]);
    
    const fromPointList = [...new Set(fromList)];
    const toPointList = [...new Set(toList)].sort((a,b)=>a-b);

    
    let duplicateList = [];
    let previousEdge = fromList[0];
    
    for(let i = 1;i< fromList.length; i++){
        const from = fromList[i];
        if(from === previousEdge){
            duplicateList.push(edges[i - 1]);
            duplicateList.push(edges[i]);
        }
        previousEdge = from;
    }

    duplicateList = [...new Set(duplicateList)];

    let duplicateStartList = [...new Set(duplicateList.map((v)=>v[0]))];
    

    let createdEdge = 0;
    let donutCount = 0, stickCount = 0, eightCount = duplicateStartList.length - 1;

    for(let duplicate of duplicateStartList){
        if(toList.indexOf(duplicate) === -1){
            createdEdge = duplicate;
            break;
        }
    }

    const startPointList = duplicateList.filter((x)=>x[0]===createdEdge);
    

    let fromIndex = 0;
    for(let i = 0;i< toPointList.length; i++){
        const to = toPointList[i];
        if(fromIndex === fromPointList.length){
            stickCount++;
        }
        const from = fromPointList[fromIndex];
        if(from === to){
            fromIndex++;
            continue;
        }else if(from > to){
            stickCount++;
        }else if(from < to){
            i--;
            fromIndex++;
        }
    }
    
    donutCount = startPointList.length - stickCount - eightCount; 
    
    return [createdEdge, donutCount, stickCount, eightCount];
}