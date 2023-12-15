// https://www.acmicpc.net/problem/9019

function D(num) {
    return (2 * num) % 10000;
}

function S(num) {
    return (num === 0) ? 9999 : num - 1;
}

function L(num) {
    const nums = [...String(num)];
    nums.push(nums.shift());
    return Number(nums.join(""));
}

function R(num) {
    const nums = [...String(num)];
    nums.unshift(nums.pop());
    return Number(nums.join(""));
}

function solution(start, end) {
    const visited = new Set();
    const queue = [[start, ""]];

    while (queue.length > 0) {
        const [current, answer] = queue.shift();

        if (current === end) {
            return answer;
        }

        const nextD = D(current);
        if (!visited.has(nextD)) {
            visited.add(nextD);
            queue.push([nextD, answer + 'D']);
        }

        const nextS = S(current);
        if (!visited.has(nextS)) {
            visited.add(nextS);
            queue.push([nextS, answer + 'S']);
        }

        const nextL = L(current);
        if (!visited.has(nextL)) {
            visited.add(nextL);
            queue.push([nextL, answer + 'L']);
        }

        const nextR = R(current);
        if (!visited.has(nextR)) {
            visited.add(nextR);
            queue.push([nextR, answer + 'R']);
        }
    }

    return "IMPOSSIBLE";
}

console.log(solution(1234, 3412)); // LL
console.log(solution(1000, 1)); // L
console.log(solution(1, 16)); // DDDD
