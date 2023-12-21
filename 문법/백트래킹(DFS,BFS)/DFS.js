// https://www.acmicpc.net/problem/2011

function solution(str) {
    let result = 0;

    function dfs(strings) {
        if(strings.length < 1) {
            result++;
            return;
        }
        if(strings.length > 1) {
            const check = Number(`${strings[0]}${strings[1]}`);
            if(check < 27){
                dfs(strings.slice(2));
            }
        }

        dfs(strings.slice(1));
    }
    dfs([...str]);
    return result;
};

console.log(solution("25114"));
console.log(solution("1111111111"));
