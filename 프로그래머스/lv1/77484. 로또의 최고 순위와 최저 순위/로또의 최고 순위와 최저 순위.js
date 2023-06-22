function result(num){
    return (7- num) > 6 ? 6 : (7- num); 
}
function solution(lottos, win_nums) {
    var answer = [];
    let correct = lottos.filter((x)=>win_nums.includes(x)).length;
    let zero_num = lottos.filter((x)=>x===0).length;
    console.log(correct)
    console.log(zero_num)
    return [result(correct+ zero_num),result(correct)];
}