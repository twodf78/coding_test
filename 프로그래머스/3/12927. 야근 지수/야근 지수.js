function solution(n, works) {
    works.sort((a,b)=>b-a);
    
    const reduce = (rest, idx) =>{
        let i = 0;
        while(rest > 0){
            if(i > idx) i = 0;
            works[i]--;
            rest--;
            i++;
        }
    }
    for(let i = 0; i< works.length; i++){
        if(i === works.length - 1 || n === 0) break;
        const workCount = i + 1;
        const smallerWork = works[i + 1];
        const biggerWork = works[i];
        
        if(biggerWork - smallerWork === 0){
            continue;
        }
        let minus = Math.min(n, (biggerWork - smallerWork) * workCount);

        reduce(minus, i);
        n -= minus;

        
    }
    
    reduce(n, works.length - 1);

    works.sort((a,b)=>b-a);
    if (works.at(-1) < 0) return 0;
    let answer = works.reduce((acc, x)=>acc + x**2, 0);
    return answer;
}