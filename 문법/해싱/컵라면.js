// https://www.acmicpc.net/problem/1781

function solution(N, deadline, weight){
    let answer = 0;
    const obj = {};
    const n = Array.from({ length: N}, (_, i) => i + 1);
    deadline.sort().forEach((val, i) => {
        if(!obj[val]) obj[val] = [];
        obj[val].push(weight[i]);
    });
    n.forEach((num) => {
        if(obj[num]) {
            answer += Math.max(...obj[num]);
        }
    });
    return answer;
}

console.log(solution(7, [1,1,3,3,2,2,6], [6,7,2,1,4,5,1]));