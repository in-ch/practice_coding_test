// https://www.acmicpc.net/problem/11052

function solution(wanted, cards) {
    const dp = Array.from({ length: wanted + 1 }, () => 0);

    for(let i = 1; i <= wanted; i++) {
        for(let j = 1; j <= i; j++) {
            dp[i] = Math.max(dp[i], dp[i - j] + cards[j - 1]);
        }
    }
    return dp[wanted];
}

console.log(solution(4, [1, 5, 6, 7])); // 10
console.log(solution(5, [10, 9, 8, 7, 6])); // 50
console.log(solution(10, [1, 1, 2, 3, 5, 8, 13, 21, 34, 55])); // 55
console.log(solution(10, [5, 10, 11, 12, 13, 30, 35, 40, 45, 47])); // 50


