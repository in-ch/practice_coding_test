// https://www.acmicpc.net/problem/2206

function solution(row, col, array) {
    const queue = [{x: 0, y: 0, move: 1, bc: 0}];
    const moveX = [0, 0, -1, 1];
    const moveY = [-1, 1, 0, 0];

    while(queue.length > 0) {
        const {x, y, move, bc } = queue.shift();

        for(let i =0; i < 4; i++) {
            const dx = x + moveX[i];
            const dy = y + moveY[i];

            if(dx >= 0 && dy >= 0 && dx < col && dy < row) {
                if(dx === col - 1 && dy === row - 1) {
                    return move + 1;
                }

                if (array[dy][dx] === 0) {
                    array[dy][dx] = 1; 
                    queue.push({x: dx, y: dy, move: move + 1, bc});
                } else if (bc === 0) {
                    array[dy][dx] = 1;
                    queue.push({x: dx, y: dy, move: move + 1, bc: 1});
                }
            }
        }
    }

    return -1;
}   

console.log(solution(6, 4, [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 1],
    [0, 0, 0, 0]
])); // 15