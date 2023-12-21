// https://www.acmicpc.net/problem/17299

function solution(N, seq) {
    const count = new Array(1000001).fill(0); // [0, 0, 0, 0, ....., 0]
                                              // [0, 3, 2, 1, 1, ......]
    const stack = [];
    const res = new Array(N).fill(-1); // [-1. -1, -1, -1, -1, -1, -1]

    for (const num of seq) {
        count[num]++;
    }

    for (let i = 0; i < N; i++) {
        // seq 배열의 각 요소에 대해 다음으로 큰 요소를 찾는다.
        // count[seq[stack[stack.length - 1]]] < count[seq[i]]: 이 조건은 스택의 맨 위에 있는 요소의 카운트(seq[stack[stack.length - 1]])와 
        // 현재 요소의 카운트(seq[i])를 비교한다. 
        // 스택의 맨 위에 있는 요소의 카운트가 현재 요소의 카운트보다 작은 경우에만 루프가 계속된다. 
        while (stack.length > 0 && count[seq[stack.at(-1)]] < count[seq[i]]) {
            res[stack.pop()] = seq[i];
        }
        stack.push(i);
    }
    return res.join(" ");
}

console.log(solution(7, [1, 1, 2, 3, 4, 2, 1])); // -1 -1 1 2 2 1 -1