const smallLetter = Array.from({length : 26}, (v, i ) => String.fromCharCode(i + 97)).reverse();
const bigLetter = smallLetter.map((x)=>x.toUpperCase());
const all = smallLetter.concat(bigLetter);
function solution(s) {
    const arrS = s.split("").sort((a,b)=>{
        return all.indexOf(a) - all.indexOf(b);
    });
    return arrS.join('');
}