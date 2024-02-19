function solution(a, b) {
    let first = Number(a.toString() + b.toString());
    let second = Number(b.toString() + a.toString());
    return first > second ? first : second;
}