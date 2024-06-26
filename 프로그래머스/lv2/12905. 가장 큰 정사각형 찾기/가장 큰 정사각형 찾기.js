function solution(board)
{
    const cache = new Array(board.length).fill(0).map((el) => new Array(board[0].length).fill(0));

    for (let i = 0; i < board.length; i++) {
        cache[i][0] = board[i][0];
    }

    for (let i = 0; i < board[0].length; i++) {
        cache[0][i] = board[0][i];
    }

    for (let i = 1; i < board.length; i++) {
        for (let j = 1; j < board[0].length; j++) {
            if (board[i][j]) cache[i][j] = Math.min(cache[i - 1][j - 1], cache[i][j - 1], cache[i - 1][j])+ 1;
        }
    }
    const maxLen = cache.reduce((prev, next) => Math.max(prev, Math.max(...next)),0)
    return maxLen**2;
}