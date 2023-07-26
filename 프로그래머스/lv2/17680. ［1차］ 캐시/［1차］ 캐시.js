function solution(cacheSize, cities) {
    var answer = 0;
    const cache =new Array(cacheSize).fill(0); 
    const cacheDict = {}; 
    for(let i = 0; i< cities.length; i++){
        const city = cities[i].toLowerCase();
        const idx = cache.indexOf(city);
        if(idx >= 0){
            answer += 1;
            cache.splice(idx, 1);
        }else{
            answer += 5;
            cache.shift();
        }
        cache.push(city);
        
    }
    return cacheSize === 0 ? cities.length * 5 : answer;
}