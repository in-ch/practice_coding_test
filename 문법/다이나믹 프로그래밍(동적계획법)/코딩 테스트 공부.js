// https://school.programmers.co.kr/learn/courses/30/lessons/118668
function solution(alp, cop, problems) {
    let maxAlp = alp;
    let maxCop = cop;

    for (let i = 0; i < problems.length; i++) {
      maxAlp = Math.max(maxAlp, problems[i][0]);
      maxCop = Math.max(maxCop, problems[i][1]);
    }
  
    const dp = Array.from(Array(maxAlp + 1), () => Array(maxCop + 1).fill(Infinity));
    dp[alp][cop] = 0;
  
    for (let i = alp; i <= maxAlp; i++) {
      for (let j = cop; j <= maxCop; j++) {
  
        if (i + 1 <= maxAlp) dp[i + 1][j] = dp[i + 1][j] < dp[i][j] + 1 ? dp[i + 1][j] : dp[i][j] + 1;
        if (j + 1 <= maxCop) dp[i][j + 1] = dp[i][j + 1] < dp[i][j] + 1 ? dp[i][j + 1] : dp[i][j] + 1;
  
        for (let [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems) {
          if (i >= alp_req && j >= cop_req) {
            const nextAlp = i + alp_rwd > maxAlp ? maxAlp : i + alp_rwd;
            const nextCop = j + cop_rwd > maxCop ? maxCop : j + cop_rwd;
  
            dp[nextAlp][nextCop] =dp[nextAlp][nextCop] < dp[i][j] + cost ? dp[nextAlp][nextCop] :dp[i][j] + cost;
          }
        }
      }
    }
    debugger
    return dp[maxAlp][maxCop];
}

console.log(solution(10, 10, [[10,15,2,1,2],[20,20,3,3,4]])); // 15
console.log(solution(0, 0, [[0,0,2,1,2],[4,5,3,1,2],[4,11,4,0,2],[10,4,0,4,2]])); // 13