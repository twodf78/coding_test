function solution(sizes) {
    let xmax = 0;
    let ymax = 0;
    sizes.forEach((pair)=>{
        let min = pair[0] > pair[1] ? pair [1] : pair[0];
        let max = pair[0] > pair[1] ? pair [0] : pair[1];
       if(xmax<min) xmax = min; 
       if(ymax<max) ymax = max; 
    });
    
    return xmax * ymax;
}