function solution(numbers) {
    var answer = 0;

    var n = numbers.split('');
    var nums = new Set()
    combi(n,'');

    function combi(a, s) {
        if (s.length > 0) {
            const num = Number(s);
            if (!nums.has(num)) {
                nums.add(num);
            }
        }
        if (a.length > 0) {
            for (var i = 0; i< a.length; i++) {
                var t = a.slice(0)
                t.splice(i,1);
                combi(t,s + a[i]);
            }
        }
    }

    for(const num of [...nums]){
        if(chkPrime(num))answer++;
    }
    function chkPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num%i===0) return false;
        }
        return true;
    }

    return answer;
}