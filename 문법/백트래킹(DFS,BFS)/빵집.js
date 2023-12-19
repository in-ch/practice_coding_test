// https://www.acmicpc.net/problem/3109

function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const visit = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(false));
    const dx = [-1, 0, 1];
    const dy = [1, 1, 1];
    let cnt = 0;

    function dfs(x, y) {
        visit[x][y] = true;

        if (y === cols) {
            cnt++;
            return true;
        }

        for (let i = 0; i < 3; i++) {
            const next_x = x + dx[i];
            const next_y = y + dy[i];

            if (
                next_x >= 1 &&
                next_y >= 1 &&
                next_x <= rows &&
                next_y <= cols &&
                maps[next_x - 1][next_y - 1] === '.' &&
                !visit[next_x][next_y]
            ) {
                const reachedEnd = dfs(next_x, next_y);
                if (reachedEnd) return true;
            }
        }

        return false;
    }

    for (let i = 1; i <= rows; i++) {
        dfs(i, 0); // 첫째 열부터 시작
    }

    return cnt;
}


console.log(solution([
    ['.' ,'.' ,'x' ,'.' ,'.' ,'.' ,'.' ,'.' ,'.' ,'.'],
    ['.' ,'.' ,'.' ,'.' ,'.' ,'x' ,'.' ,'.' ,'.' ,'.'],
    ['.' ,'x' ,'.' ,'.' ,'.' ,'.' ,'x' ,'.' ,'.' ,'.'],
    ['.' ,'.' ,'.' ,'x' ,'.' ,'.' ,'.' ,'x' ,'x' ,'.'],
    ['.' ,'.' ,'.' ,'.' ,'.' ,'.' ,'.' ,'.' ,'.' ,'.'],
    ['.' ,'.' ,'.' ,'.' ,'x' ,'.' ,'.' ,'.' ,'.' ,'.']
])); // 5

console.log(solution([
    ['.', 'x', 'x', '.', '.', ],
    ['.', '.', 'x', '.', '.', ],
    ['.', '.', '.', '.', '.', ],
    ['.', '.', '.', 'x', '.', ],
    ['.', '.', '.', 'x', '.', ]
])); // 2

console.log(solution([
    ['.', 'x', '.', '.', '.', 'x', '.', ],
    ['.', 'x', '.', '.', '.', 'x', '.', ],
    ['.', 'x', '.', '.', '.', '.', '.', ],
    ['.', '.', '.', '.', '.', '.', '.', ],
    ['.', '.', '.', '.', '.', '.', '.', ]
])); // 2