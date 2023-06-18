
const weekday = ['THU', 'FRI','SAT', 'SUN','MON','TUE','WED'];
const manyMonth = [1,3,5,7,8,10,12];
const lessMonth = [4,6,9,11];
function solution(a, b) {
    var answer = '';
    let date = 0;
    for(let i =1 ;i<a; i++){
        if(manyMonth.includes(i)){
            date += 31;
        }else if( i === 2){
            date += 29;
        }else if(lessMonth.includes(i)) {
            date += 30;
        }
    }
    date += b;
    
    date = parseInt(date%7,0);
    return weekday[date];
}