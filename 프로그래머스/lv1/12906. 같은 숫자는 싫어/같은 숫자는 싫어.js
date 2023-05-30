function solution(arr)
{

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

    
    const answer = [];
    let before = -1;
    arr.forEach((num)=>{
        if(before !== num){
            answer.push(num);
        }
        before = num;
    })
    return answer;
}