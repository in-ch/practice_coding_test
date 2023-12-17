// https://www.acmicpc.net/problem/11559
// 연결된 거 찾으려면 DFS를 사용해야 한다. 

function makeVisited(x, y) {
    return Array.from({length: x} , () =>  Array.from({length: y} , () => false));
}

function solution(arrays) {
    let result = 0; // 연쇄 수
    const moveX = [0, 0, -1, 1];
    const moveY = [-1, 1, 0, 0];

    let cols = 6;
    let rows = 12;

    function dfs(i, j, value, visited, tempList) {
        for (let k = 0; k < 4; k++) {
            let dx = i + moveX[k];
            let dy = j + moveY[k];
            if (dx < 0 || dy < 0 || dy > rows - 1 || dx > cols - 1) continue;
            const _value = arrays[dy][dx];
            if (_value === value && !visited[dy][dx]) {
                tempList.push({ x: dx, y: dy });
                visited[dy][dx] = true;
                dfs(dx, dy, value,  visited, tempList);
            }
        }
    }

    function floorMap(matrix, positions) {
        positions.forEach(({ x, y }) => {
            for (let i = 0; i < y; i++) {
                matrix[y - i][x] = matrix[y - (i + 1)][x];
            }
            matrix[0][x] = ".";
        });
        return matrix;
    }

    while (true) {
        const visited = makeVisited(rows, cols); // 방문한 곳, 배열이 바뀌면 초기화 필요
        let flag = false; // 연쇄 발생 여부 플래그

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (arrays[i][j] !== "." && !visited[i][j]) {
                    const tempList = [];
                    const queue = [{ x: j, y: i, value: arrays[i][j] }];
                    const { x, y, value } = queue.shift();
                    visited[y][x] = true;
                    tempList.push({ x, y });
                    dfs(x, y, value, visited, tempList);
                    if (tempList.length > 3) {
                        result++;
                        tempList.sort((a, b) => a.y - b.y);
                        arrays = floorMap(arrays, tempList);
                        flag = true; // 연쇄 발생
                        break;
                    }
                }
            }
            if (flag) {
                break; // 연쇄 발생 시 더 이상 검사하지 않고 루프 종료
            }
        }

        if (!flag) {
            break;
        }; // 더 이상 연쇄가 발생하지 않으면 루프 종료
    }

    return result;
}

console.log(solution([
    [".",".",".",".",".","."],
    [".",".",".",".",".","."],
    [".",".",".",".",".","."],
    [".",".",".",".",".","."],
    [".",".",".",".",".","."],
    [".",".",".",".",".","."],
    [".",".",".",".",".","."],
    [".",".",".",".",".","."],
    [".","Y",".",".",".","."],
    [".","Y","G",".",".","."],
    ["R","R","Y","G",".","."],
    ["R","R","Y","G","G","."]
])); // 3