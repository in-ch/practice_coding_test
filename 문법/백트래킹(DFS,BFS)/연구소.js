// https://www.acmicpc.net/problem/17142

function findZero(maps) {
    const results = [];
    for(let i =0; i< maps.length; i++){
        for(let j = 0; j < maps[0].length; j++){
            console.log(maps[i][j]);
            if(maps[i][j] === "0") {
                results.push({x:j , y:i, count: 0});
            }
        }
    }
    return results;
}

function solution(maps) {
    const dx = [0,0,-1,1];
    const dy = [-1,1,0,0];

    const rows = maps.length;
    const cols = maps[0].length; 

    const queue = findZero(maps);

    while(queue.length > 0) {
        const {x, y, count} = queue.shift();
        for(let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
  
            if(ny >=0 && ny < rows && nx >=0 && nx < cols && maps[ny][nx] === ' ') {
                maps[ny][nx] = count + 1;

                queue.push({x: nx, y: ny, count: count + 1});    
            }
        }
    } 
    debugger
};

console.log(solution([
    ["0", " ", " ", " ", "|", "|", " "],
    [" ", " ", "|", " ", "|", "0", " "],
    [" ", "|", "|", " ", "|", " ", " "],
    [" ", "|", " ", " ", " ", " ", " "],
    [" ", " ", " ", "0", " ", "|", "|"],
    [" ", "|", " ", " ", " ", " ", " "],
    ["|", "|", " ", " ", " ", " ", "|"]
])); // 4