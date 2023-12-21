// https://www.acmicpc.net/problem/11066

function solution(files) {
    const n = files.length;
    const dp = Array.from(Array(n), () => Array(n).fill(0));
  
    // 부분합을 구하는 함수
    const getSum = (start, end) => {
      let sum = 0;
      for (let i = start; i <= end; i++) {
        sum += files[i];
      }
      return sum;
    };
  
    // 파일을 합치는데 필요한 최소 비용 계산
    for (let len = 2; len <= n; len++) {
      for (let start = 0; start <= n - len; start++) {
        const end = start + len - 1;
        dp[start][end] = Infinity;
  
        for (let k = start; k < end; k++) {
          dp[start][end] = Math.min(dp[start][end], dp[start][k] + dp[k + 1][end] + getSum(start, end));
        }
      }
    }
    debugger;
    return dp[0][n - 1];
  }

console.log(solution([40, 30, 30, 50])); // 300
console.log(solution([1, 21, 3, 4, 5, 35, 5, 4, 3, 5, 98, 21, 14, 17, 32])); // 864
