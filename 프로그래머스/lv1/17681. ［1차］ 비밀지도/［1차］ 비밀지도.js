function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i<n; i++){
        let newString = (arr1[i] | arr2[i]).toString(2).split("").map((x)=>{
            if(x==='1') return "#";
            else if(x==='0') return " ";
        }).join("");
        while(newString.length < n){
            newString =  " " + newString;
        }
        answer.push(newString);
    }
    return answer;
}