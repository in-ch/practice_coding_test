// https://www.acmicpc.net/problem/5214

// BFS

/**
 * @param {number[]} info 첫째 줄에 역의 수 N과 한 하이퍼튜브가 서로 연결하는 역의 개수 K, 하이퍼튜브의 개수 M 
 * @param {number[][]} tubes 하이퍼역 연결 정보
 */
function solution(info, tubes) {
    const [n, k, m] = info; 

    const graph = Array.from({ length: n + m + 1 }, () => []); // 역 + 튜브

    // graph를 채운다.
    for(let i = 0; i < tubes.length; i++) {
        const arr = tubes[i];
        for (const x of arr) {
            graph[x].push(n + (i + 1)); // 노드에 하이퍼 idx 추가
            graph[n + (i + 1)].push(x); // 하이퍼에 노드 idx 추가
        }
    }

    const visited = new Set();
    let find = false;
    const queue = [{cur: 1, dep: 1}]; 

    while(queue.length > 0) {
        const {cur, dep} = queue.shift();
        if(cur === n) {
            find = true;
            return (parseInt(dep / 2) + 1);
        }

        for(const next of graph[cur]) {
            if(!visited.has(next)) {
                queue.push({cur: next, dep: dep + 1});
                visited.add(next);
            }
        }
    }

    if(!find) return -1;
};

console.log(solution(
    [9, 3, 5], 
    [
        [1, 2, 3],
        [1, 4, 5],
        [3, 6, 7],
        [5, 6, 7],
        [6, 8, 9]
    ]
)); // 4