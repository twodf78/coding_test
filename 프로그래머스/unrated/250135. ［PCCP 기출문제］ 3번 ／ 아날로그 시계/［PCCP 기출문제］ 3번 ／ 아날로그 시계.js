function solution(h1, m1, s1, h2, m2, s2) {
    //0시0분0초 ~ h:m:s까지 겹치는 횟수
    const getCount = (h,m,s) => {
        const [hDegree,mDegree,sDegree] = [(h*30+m*0.5+s*0.5/60)%360,(m*6+s*0.1)%360,s*6]
        let count = (h*60+m)*2 - 1
        count -= h 
        
        if(sDegree>=mDegree) count +=1
        if(sDegree>=hDegree) count +=1
        
        if(h>=12) count -= 2 
        
        return count;
    }
    
    let result = getCount(h2,m2,s2) - getCount(h1,m1,s1)
    if((h1===0||h1===12)&&m1===0&&s1===0) result +=1
    return result
    
}