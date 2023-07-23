function solution(elements) {
    let answer = elements.map((x)=>x);
    for(let i = 1; i<elements.length; i++){
        const arr = answer.slice((i-1)*elements.length);
       for(let j = 0; j< elements.length; j++){
           answer.push(arr[j] + elements[i + j >= elements.length ? i + j - elements.length : i+ j]);
           
       } 
    }
    const set = new Set(answer);
    return set.size;
}