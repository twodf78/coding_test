function solution(numbers) {
    return numbers.reduce((acc, v)=>acc + v, 0)/(numbers.length);
}