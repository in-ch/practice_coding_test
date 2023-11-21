// https://school.programmers.co.kr/learn/courses/30/lessons/1844
// Lv 2 


// 이전에 푼 솔루션 
function prevSolution(maps) {
    var answer = 0;
    var answers = [];

    function dfs(_currentX, _currentY, count) {
        if(maps[_currentY] === undefined) {
            return;
        } else if(maps[_currentY][_currentX] === 0 || maps[_currentY][_currentX] === undefined ) {
            answers.push(-1); 
            return;
        } else if(_currentX === (maps[0].length - 1) && _currentY === (maps.length - 1)) {
            answers.push(count);
            return;
        } 
        else {
            // 위로 이동 
            dfs(_currentX, _currentY - 1, count + 1);

            // 아래로 이동 
            dfs(_currentX, _currentY + 1, count + 1);

            // 왼쪽으로 이동
            dfs(_currentX - 1, _currentY, count + 1);

            // 오른쪽으로 이동 
            dfs(_currentX + 1, _currentY, count + 1);
        } 
    }

    dfs(0, 0, 0);

    return answer;
}

// 이렇게 푸니깐 통과하기는 하는데 시간 효율성에서 떨어짐. 
function _solution(maps) {
    var answer = Number.MAX_SAFE_INTEGER;

    function dfs(_currentX, _currentY, count) {
        if(maps[_currentY] === undefined || maps[_currentY][_currentX] === undefined) {
            return;
        } else if(maps[_currentY][_currentX] === 0) {
            return;
        } else if(_currentX === (maps[0].length - 1) && _currentY === (maps.length - 1)) {
            answer = Math.min(answer, count);
            return;
        } 
        else {
            // 방문한 곳은 0으로 마킹,  이 코드를 추가 안해서 계속 _currentY만 0, 1에서 왔다갔다 했음.
            maps[_currentY][_currentX] = 0;

            // 위로 이동 
            dfs(_currentX, _currentY - 1, count + 1);

            // 아래로 이동 
            dfs(_currentX, _currentY + 1, count + 1);

            // 왼쪽으로 이동
            dfs(_currentX - 1, _currentY, count + 1);

            // 오른쪽으로 이동 
            dfs(_currentX + 1, _currentY, count + 1);

            // 백트래킹: 다른 경로에서 현재 위치를 방문할 수 있도록 다시 1로 마킹,
            maps[_currentY][_currentX] = 1;
        } 
    }

    dfs(0, 0, 1);  // 시작 지점은 count가 1부터 시작

    return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}


// 보통 최단거리 검사같은 경우 DFS보다는 BFS를 사용하는 것이 좋음.
// 아래 코드는 BFS와 메모리케이션을 적용한 코드이다. 
// 힙을 사용해서 우선순위 큐를 사용해 현재 위치에서 갈 수 있는 경로 중에 가장 최소 비용의 위치를 먼저 선택할 수 있게 한다. (불필요한 경로를 더 빨리 제거)
// 탐색 방향 최적화: 위의 구현에서는 상, 하, 좌, 우로 모든 방향을 탐색하고 있다. 그러나 특정 경우에는 특정 방향으로만 탐색하는 것이 빠를 수 있다.
// 예를 들어, 작점에서 끝점으로 직선 경로가 가능한 경우 좌표 평면에서의 거리 계산을 통해 최소 거리를 빠르게 찾을 수 있다. 
function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const dx = [0, 0, -1, 1]; // 상하좌우
    const dy = [-1, 1, 0, 0]; // 상하좌우

    const queue = [{ x: 0, y: 0, count: 1 }];

    while (queue.length > 0) {
        const { x, y, count } = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && nx < cols && ny >= 0 && ny < rows && maps[ny][nx] === 1) {
                if (nx === cols - 1 && ny === rows - 1) {
                    // 끝에 도달했으면 리턴한다.
                    return count + 1;
                }

                maps[ny][nx] = 0; // 방문한 곳은 0으로 마킹
                queue.push({ x: nx, y: ny, count: count + 1 });
            }
        }
    }

    return -1; // 도착점에 도달하지 못한 경우
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]])); // 11
console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]])); // -1
