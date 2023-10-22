// https://school.programmers.co.kr/learn/courses/30/lessons/148653

function solution(storey) {
    const str = String(storey);
    const n = str.length; // str의 자릿수
    let result = Infinity;

    dfs(n - 1, 0, 0);

    function dfs(cursor, offset, score) {
        // cursor가 -1에 도달하면 모든 자릿수를 처리한 것이므로, result를 업데이트
        if (cursor === -1) {
            result = Math.min(result, score + offset);
            return;
        }
        const num = Number(str[cursor]) + offset;
        // 현재 자릿수를 포함하는 경우와 포함하지 않는 경우 두 가지로 나누어서 계산
        dfs(cursor - 1, 0, score + num);
        dfs(cursor - 1, 1, score + 10 - num);
    }

    return result;
}


console.log(solution(16));
console.log(solution(2554));