// https://www.acmicpc.net/problem/1600

function horseMoveFuc(x, y, horses) {
    return {x: x + horses[0].x + horses[1].x, y: y + horses[0].y + horses[1].y};
}

function solution(K, maps) {
    const queue = [{x:0, y:0, count:0, k: K}];
    const visited = new Set();

    const rows = maps.length;
    const cols = maps[0].length;

    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    const horseMoving =  [
                            [
                                {x: 0, y: -1}, {x: -1, y: -1}
                            ],
                            [
                                {x: 0, y: -1}, {x: 1, y: -1}
                            ],
                            [
                                {x: 1, y: 0}, {x: 1, y: -1}
                            ],
                            [
                                {x: 1, y: 0}, {x: 1, y: 1}
                            ],
                            [
                                {x: 0, y: 1}, {x: -1, y: 1}
                            ],
                            [
                                {x: 0, y: 1}, {x: 1, y: 1}
                            ],
                            [
                                {x: -1, y: 0}, {x: -1, y: -1}
                            ],
                            [
                                {x: -1, y: 0}, {x: -1, y: 1}
                            ],
                        ];
                        
    while(queue.length > 0) {
        const {x, y, count, k} = queue.shift();

        if(k > 0) {
            for(let i = 0; i < horseMoving.length; i++) {
                const horseMove = horseMoving[i];
                const { x:nx, y: ny } = horseMoveFuc(x, y, horseMove); 
                const coordString = `${nx},${ny}`;
                if(nx >= 0 && ny >= 0 && !visited.has(coordString) && nx < cols && ny < rows && maps[ny][nx] !== 1) {
                    if(nx === cols - 1 && ny === rows - 1) {
                        return count + 1;
                    }
                    visited.add(coordString);
                    queue.push({x:nx, y:ny, count: count + 1, k: k - 1});
                }
            }
        }

        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            const coordString = `${nx},${ny}`;

            if (nx >= 0 && ny >= 0 && !visited.has(coordString) && nx < cols && ny < rows && maps[ny][nx] !== 1) {
                if(nx === cols - 1 && ny === rows - 1) {
                    return count + 1;
                }
                visited.add(coordString);
                queue.push({x:nx, y:ny, count: count + 1, k});
            }
        }
    }      


    return -1;

};

console.log(solution(1, 
    [
        [0, 0, 0, 0],
        [1, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 0, 0]
    ]
)); // 4

console.log(solution(2, 
    [
        [0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0]
    ]
)); // -1

