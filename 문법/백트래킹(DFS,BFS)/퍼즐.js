// https://www.acmicpc.net/problem/1525

function findZero(array) {
    for (let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++){
            if(array[i][j] === 0) return [i, j, (i * 3) + (j + 1)];
        }
    }
}

function solution(array) {
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    let count = 0;
    let start = findZero(array);

    const queue = [start];

    while(queue.length > 0) {
        const [x, y, origin] = queue.shift();
        
        if(x === 2 && y === 2 && origin === 9) return count;

        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if(nx >=0 && ny >=0 && nx < 3 && ny < 3 && array[nx][ny] === origin) {
                array[nx][ny] = 0;
                array[x][y] = origin;
                queue.push([nx, ny, (nx * 3) + (ny + 1)]);
                count++;
            }
        }
    }

    return -1;
}

console.log(solution([
    [1, 0, 3],
    [4, 2, 5],
    [7, 8, 6]
                ]));