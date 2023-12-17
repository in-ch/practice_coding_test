// https://www.acmicpc.net/problem/2589
// 게임 맵 최단 거리 찾기랑 똑같은 문제임 
function solution(start, end, map) {
    const visited = new Set();
    const queue = [{x: start.x, y: start.y, count:0}];
    const rows = map.length;
    const cols = map[0].length;
    const dx = [0,0,-1,1];
    const dy = [-1,1,0,0];

    visited.add([start.x, start.y]);

    while(queue.length > 0){
        const {x, y, count} = queue.shift();
        for(let i = 0; i < 4;i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx > -1 && ny > -1 && nx < cols && ny < rows && map[ny][nx] === "L" && !visited.has([nx, ny])) {
                if(nx === end.x && ny === end.y) {
                    return count + 1;
                }
                visited.add([nx, ny]);
                queue.push({x: nx, y: ny, count: count + 1});
            }
        }
    }
    return -1;
};

console.log(solution({x: 0, y: 3}, {x: 1,y: 4}, [
    ["W", "L", "L", "W", "W", "W", "L"],
    ["L", "L", "L", "W", "L", "L", "L"],
    ["L", "W", "L", "W", "L", "W", "W"],
    ["L", "W", "L", "W", "L", "L", "L"],
    ["W", "L", "L", "W", "L", "W", "W"],
])); // 8