// https://www.acmicpc.net/problem/9177
// https://velog.io/@embeddedjune/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%B0%B1%EC%A4%80-DP-9177-%EB%8B%A8%EC%96%B4-%EC%84%9E%EA%B8%B0

function solution(str1, str2, str3) {
    const len1 = str1.length; // 3
    const len2 = str2.length; // 4

    // dp[i][j]는 str1의 처음 i글자와 str2의 처음 j글자로 str3의 처음 i+j글자를 만들 수 있는지 여부를 나타냄
    const dp = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(false));

    // 초기값 설정
    dp[0][0] = true;

    // dp 배열 채우기
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            const k = i + j - 1;

            if (i > 0 && str1[i - 1] === str3[k]) {
                dp[i][j] = dp[i][j] || dp[i - 1][j];
            }

            if (j > 0 && str2[j - 1] === str3[k]) {
                dp[i][j] = dp[i][j] || dp[i][j - 1];
            }
        }
    }

    // 결과 반환
    return dp[len1][len2];
}

console.log(solution("cat", "tree", "tcraete")); // true
console.log(solution("cat", "tree", "cttaree")); // false
