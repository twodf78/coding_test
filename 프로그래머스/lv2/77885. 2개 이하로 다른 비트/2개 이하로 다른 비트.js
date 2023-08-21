function solution(numbers) {
    return numbers.map((num,i) => {
        const current = num.toString(2);
        const currentArr = current.split("");
        const lastZeroIdx = currentArr.lastIndexOf('0');
        if(lastZeroIdx<0){
            return num + 2 ** (current.length - 1)
        }
        else{
            const lastOneIdx = currentArr.lastIndexOf("1");
            let add = currentArr.length - 1;
            add = add - (lastOneIdx< lastZeroIdx ? lastZeroIdx : lastZeroIdx + 1)
            return num + 2 ** add;
        }
    });
}
