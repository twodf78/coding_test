function solution(n) {
    const answer = [];
    let stackOne = new Array(n).fill(0).map((v, i)=>i+1);
    let stackTwo = [];
    let stackThree = [];
    const push = (a, b)=>{
        let tempStackA = a===1 ? stackOne : a===2 ? stackTwo : stackThree;
        let tempStackB = b===1 ? stackOne : b===2 ? stackTwo : stackThree;
        tempStackB.push(tempStackA.shift());
        tempStackB.sort((a,b) =>a-b);
        answer.push([a,b]);
    }
    const arrCompare = (i, j) =>{
        let arrI = i===1 ? stackOne : i===2 ? stackTwo : stackThree;
        let arrJ = j===1 ? stackOne : j===2 ? stackTwo : stackThree;

        if(arrJ.length=== 0){
            push(i, j);
        }else if (arrI.length=== 0){
            push(j, i);
        }else{
            if (arrI[0] < arrJ[0]){
                push(i, j);
            }else{
                push(j, i);
            }
        }  
    }

    try{
        if(n % 2 === 0){
            while(stackThree.length < n){
                for(let i = 1; i<= 2; i++){
                    for(let j = i+1 ; j<=3;j++){
                        arrCompare(i, j); 
                        if(stackThree.length === n){
                            throw new Error("finish");
                        }
                    }
                }
            }
        }else{
            while(stackThree.length < n){
                for(let i = 1; i<= 2; i++){
                    for(let j = 3; j>=i+1;j--){
                        arrCompare(i, j); 

                        if(stackThree.length === n){
                            throw new Error("finish");
                        }
                    }
                }
            }
        }
    }catch(e){
        return answer;
    }



    return answer;
}