function solution(m) {
    const col_check = [false, false, false];

    let min_sol = Number.MAX_VALUE;
    
    function backtracking(row, score) {
      if (row === 4) {
        if (score < min_sol) {
          min_sol = score;
        }
        return;
      }
    
      for (let i = 0; i < 3; i++) {
        if (!col_check[i]) {
          col_check[i] = true;
          backtracking(row + 1, score + m[row][i]);
          col_check[i] = false;
        }
      }
    }

    backtracking(0, 0);
    return min_sol;
}

const input = [
    [1, 5, 3],
    [2, 5, 7],
    [5, 3, 5]
];

console.log(solution(input));