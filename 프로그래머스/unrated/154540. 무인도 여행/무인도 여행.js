let visited;
let rowLength;
let columnLength;
let island = 0;
let mapsCopy;

function search(y, x) {
    if (y + 1 < rowLength && mapsCopy[y + 1][x] !== "X" && visited[y + 1][x] === false) {
        visited[y + 1][x] = true;
        island += parseInt(mapsCopy[y + 1][x]);
        search(y + 1, x);
    }
    if (y - 1 >= 0 && mapsCopy[y - 1][x] !== "X" && visited[y - 1][x] === false) {
        visited[y - 1][x] = true;
        island += parseInt(mapsCopy[y - 1][x]);
        search(y - 1, x);
    }
    if (x - 1 >= 0 && mapsCopy[y][x - 1] !== "X" && visited[y][x - 1] === false) {
        visited[y][x - 1] = true;
        island += parseInt(mapsCopy[y][x - 1]);
        search(y, x - 1);
    }
    if (x + 1 < columnLength && mapsCopy[y][x + 1] !== "X" && visited[y][x + 1] === false) {
        visited[y][x + 1] = true;
        island += parseInt(mapsCopy[y][x + 1]);
        search(y, x + 1);
    }
}

function solution(maps) {

    const answer = [];
    rowLength = maps.length;
    columnLength = maps[0].length;
    visited = Array.from({length: rowLength}, () => Array(columnLength).fill(false));
    mapsCopy = {...maps};

    for (let y = 0; y < rowLength; y++) {
        for (let x = 0; x < columnLength; x++) {
            if (maps[y][x] !== "X" && visited[y][x] === false) {
                visited[y][x] = true; 
                island += parseInt(maps[y][x]);
                search(y, x); 
                answer.push(island); 
                island = 0; 
            }
        }
    }
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}