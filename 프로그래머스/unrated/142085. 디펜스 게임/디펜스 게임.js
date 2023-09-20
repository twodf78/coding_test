function solution(n, k, enemy) {
    let left = 0, right = enemy.length;
    let mid = Math.floor((left + right) / 2);

    while (left <= right) {
        const round = enemy.slice(0, mid).sort((a,b) => b-a);
        let fever = k;
        const remain = round.reduce((acc, v) => {
            if (fever > 0) {
                fever--;
                return acc;
            } else return acc + v;
        }, 0);
        if (n - remain >= 0 && fever >= 0) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
        mid = Math.floor((left + right) / 2);
    }

    return left - 1;
}