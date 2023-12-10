// https://www.acmicpc.net/problem/1958
function solution(array) {
    const a = array[0];
    const b = array[1];
    const c = array[2];

    const dp = new Array(a.length + 1).fill(0).map(() =>
        new Array(b.length + 1).fill(0).map(() => new Array(c.length + 1).fill(0))
    );

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            for (let k = 1; k <= c.length; k++) {
                if (a[i - 1] === b[j - 1] && b[j - 1] === c[k - 1]) {
                    dp[i][j][k] = dp[i - 1][j - 1][k - 1] + 1;
                } else {
                    dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i][j - 1][k], dp[i][j][k - 1]);
                }
            }
        }
    }

    return dp[a.length][b.length][c.length];
}

console.log(solution(["abcdefghijklmn","bdefg","efg"])); // 3