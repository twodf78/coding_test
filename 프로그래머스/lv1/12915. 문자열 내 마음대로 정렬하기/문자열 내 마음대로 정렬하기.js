const smallLetter = Array(26).fill().map((v, i) => String.fromCharCode(i + 65).toLowerCase());
function solution(strings, n) {
    const newArr = strings.sort((a,b)=>{
        const letterA = smallLetter.indexOf(a.split("")[n]);
        const letterB = smallLetter.indexOf(b.split("")[n]);
        return letterA === letterB ? (a > b ? 1 : -1) : letterA - letterB;
    });           
    return newArr;
}