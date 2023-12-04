// https://school.programmers.co.kr/learn/courses/30/lessons/87946
// Lv 2
function mySolution(k, dungeons) {
    let count = 0;
    let answer = [];
    function dfs(num, restK, restArr) {
        if(restArr[num] === undefined) num = 0;
        if(restArr.length < 1 || restArr[num] === undefined) {
            answer.push(count);
            return;
        };
        const current = restArr[num];

        if(!(restK < current[0])) {
            count++;
            restK = restK - current[1];
        }
        restArr.splice(num, 1);
        dfs(num + 1, restK, restArr); // 오른쪽 탐색
        dfs(num - 1 < 1 ? 0 : num - 1 , restK, restArr); // 왼쪽 탐색
    }
    
    for(let i = 0; i < dungeons.length; i++){
        const copyDungeous = [...dungeons];
        count = 0;
        dfs(i, k, copyDungeous);
    }
    return Math.max(...answer);
}

function solution(k, dungeons) {
    let answer = -1;
    const dfs = (k, _dungeons, prev) => {
      // for문이 있으므로 애초에 종료 조건이 있다. 
      for (let i = 0; i < _dungeons.length; i++) {
        const [req, use] = _dungeons[i];

        if (!req || req > k) continue;
        const copy = [..._dungeons].map((v) => [...v]); // 다음 연산에 새로 생성.
        copy[i] = [null, null]; // 사용한 것은 null로 초기화
        dfs(k - use, copy, prev + 1);
      }
      return (answer = Math.max(prev, answer));
    };

    dfs(k, dungeons, 0);
    return answer;
}

console.log(solution(80, [[80,20],[50,40],[30,10]])); // 3