function solution(n) {
    const answer = [];
    let stackOne = new Array(n).fill(0).map((v, i)=>i+1);
    let stackTwo = [];
    let stackThree = [];
    
                    // console.log("i: >> ", i)
                    // console.log("j: >> ", j)
                    // console.log("arrI: >> ", arrI)
                    // console.log("arrJ: >> ", arrJ)
                    // console.log("stackOne: >> ", stackOne)
                    // console.log("stackTwo: >> ", stackTwo)
                    // console.log("stackThree: >> ", stackThree)
                    // console.log("stack: >> ", stack)
    
    const push = (a, b)=>{
        let tempStackA = a===1 ? stackOne : a===2 ? stackTwo : stackThree;
        let tempStackB = b===1 ? stackOne : b===2 ? stackTwo : stackThree;
        tempStackB.push(tempStackA.shift());
        tempStackB.sort((a,b) =>a-b);
        answer.push([a,b]);
    }
    const numToArr = (num) =>{
        return num===1 ? stackOne : num===2 ? stackTwo : stackThree;
    }

    try{
        if(n % 2 === 0){
            while(stackThree.length < n){
                for(let i = 1; i<= 2; i++){
                    for(let j = i+1 ; j<=3;j++){
                        let arrI = numToArr(i);
                        let arrJ = numToArr(j);

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
                        let arrI = numToArr(i);
                        let arrJ = numToArr(j);
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