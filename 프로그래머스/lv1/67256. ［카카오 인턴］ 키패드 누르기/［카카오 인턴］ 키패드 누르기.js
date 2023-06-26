function solution(numbers, hand) {
    let answer = '';
    let leftPosition = 10;
    let rightPosition = 12;
    for(let i=0;i<numbers.length;i++){
        const num = numbers[i] === 0 ? 11 : numbers[i];
        if(num === 1 || num === 4 || num === 7){
            answer += 'L';
            leftPosition = num;
        }else if(num === 3 || num === 6 || num === 9){
            answer += 'R';
            rightPosition = num;
        }else{
            const leftDifference =  Math.abs(parseInt(num /3) - parseInt((leftPosition-1) /3)) + Math.abs((leftPosition-1) %3 - (num-1) %3);
            const rightDifference =  Math.abs(parseInt(num /3) - parseInt((rightPosition-1) /3)) + Math.abs((rightPosition-1) %3 - (num-1) %3);

            console.log('num',num);
            console.log('leftPosition',leftPosition);
            console.log('rightPosition',rightPosition);
            console.log('leftDifference',leftDifference);
            console.log('rightDifference',rightDifference);
            console.log('rightHeight',Math.abs(parseInt(num /3) - parseInt((rightPosition-1) /3)));
            console.log('rightWidth',Math.abs((rightPosition-1) %3 - (num-1) %3));
            if(leftDifference === rightDifference){
                if(hand === 'right'){
                    answer +='R';
                    rightPosition = num;
                }else{
                    answer += 'L';
                    leftPosition = num;
                }
            }else if(leftDifference > rightDifference){
                answer +='R';
                rightPosition = num;
            }else if(leftDifference < rightDifference){
                answer +='L';
                leftPosition = num;
            }
        }
        
    }
    return answer;
}