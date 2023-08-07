const alpha = /[a-zA-Z]/;
function solution(str1, str2) {
    const arr1=[], arr2=[], union = [], intersect = [];     
    for(let i = 0 ; i< str1.length - 1 ; i++){
        if(!alpha.test(str1[i]) || !alpha.test(str1[i+1])) continue;
        arr1.push(str1.slice(i,i+2).toLowerCase())
    }
    for(let i = 0 ; i< str2.length - 1 ; i++){
        if(!alpha.test(str2[i]) || !alpha.test(str2[i+1])) continue;
        arr2.push(str2.slice(i,i+2).toLowerCase())
    }
    
    for(let i  = 0; i< arr1.length; i++){
        const arr2Idx = arr2.indexOf(arr1[i]);
        if( arr2Idx >= 0){
            intersect.push(arr2[arr2Idx]);
            arr1.splice(i, 1);
            arr2.splice(arr2Idx, 1);
            i-=1;
        }
    }
    const answer = intersect.length / (intersect.length + arr1.length + arr2.length);
    return !arr1.length && !arr2.length ? 65536 : Math.floor(answer * 65536)
}