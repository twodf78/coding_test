function solution(book_time) {
    const minBookTime = [];
    const changeToMin = (time)=>{
        const [hour, min] = time.split(":");
        return Number(hour) * 60 + Number(min);
    }
    book_time.forEach((time)=>{
        minBookTime.push([changeToMin(time[0]), changeToMin(time[1]) + 10])
    })
    minBookTime.sort((a, b)=>{
        return a[1] - b[1];
    })
    console.log("minBookTime:>>", minBookTime)
    
    const bookRoom = [];
    let max = 0;
    for(let i = 0; i< minBookTime.length; i++){
        // console.log("bookRoom:>>", bookRoom)
        const currentBook = minBookTime[i];
        if(bookRoom.length === 0){
            bookRoom.push(currentBook[1]);
        }
        else{
            let changeIdx = -1;
            for(let i = 0; i<bookRoom.length ; i++){
                if(bookRoom[i] <= currentBook[0]){
                    changeIdx = i;
                }
            }
            if(changeIdx>=0){
                bookRoom.splice(changeIdx, 1);
                bookRoom.push(currentBook[1]);
            }else{
                bookRoom.push(currentBook[1]);
            }
        }
        max = bookRoom.length > max ? bookRoom.length: max; 
    }
    console.log("bookRoom:>>", bookRoom)
    
    return max;
}