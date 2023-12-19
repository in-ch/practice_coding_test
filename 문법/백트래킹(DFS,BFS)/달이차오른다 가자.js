// https://www.acmicpc.net/problem/1194

function findStart(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === "0") {
                return { x, y };
            }
        }
    }
    return { x: 9999, y: 9999 };
}

function solution(maps) {
    const { x, y } = findStart(maps);
    const visited = new Set();
    const rows = maps.length;
    const cols = maps[0].length;
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    const queue = [{ x, y, count: 0, keys: [] }];

    while (queue.length > 0) {
        const { x, y, count, keys } = queue.shift();

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (
                nx >= 0 &&
                ny >= 0 &&
                nx < cols &&
                ny < rows &&
                !visited.has([nx, ny, keys.join("")].toString()) &&
                maps[ny][nx] !== "#"
            ) {
                if (nx === cols - 1 && ny === rows - 1) {
                    return count + 1;
                }

                let newKeys = keys.slice();

                // 만약 열쇠를 찾았다면 newKeys에 추가
                if (['a', 'b', 'c', 'd', 'e', 'f'].includes(maps[ny][nx])) {
                    newKeys.push(maps[ny][nx].toUpperCase());
                }

                // 만약 문을 만났는데 해당 문에 대응하는 열쇠가 없으면 스킵
                if (['A', 'B', 'C', 'D', 'E', 'F'].includes(maps[ny][nx]) && !newKeys.includes(maps[ny][nx])) {
                    continue;
                }

                queue.push({ x: nx, y: ny, count: count + 1, keys: newKeys });
                visited.add([nx, ny, newKeys.join("")].toString());
            }
        }
    }

    return -1;
}

console.log(solution([["f", "0", ".", "F", ".", ".", "1"]])); // 7

console.log(solution([
    [".", ".", ".", ".", "1"],
    ["#", "1", "#", "#", "#"],
    [".", "1", ".", "#", "0"],
    [".", ".", ".", ".", "A"],
    [".", "1", ".", "#", "."],
])); // -1


console.log(solution([
    ["a", "#", "c", "#", "e", "F", ".", "1"],
    [".", "#", ".", "#", ".", "#", ".", "."],
    [".", "#", "B", "#", "D", "#", "#", "#"],
    ["0", ".", ".", ".", ".", "F", ".", "1"],
    ["C", "#", "E", "#", "A", "#", "#", "#"],
    [".", "#", ".", "#", ".", "#", ".", "."],
    ["d", "#", "f", "#", "b", "F", ".", "1"]
])); // 55