function solution(s){
    var answer = true;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    let pCount  = 0;
    let yCount = 0;
    s.split('').forEach((letter)=>{
        if(letter === 'p' || letter === 'P') pCount ++;
        else if(letter === 'y' ||  letter === 'Y') yCount ++;
        
    })
    return pCount === yCount ? true : false;
}