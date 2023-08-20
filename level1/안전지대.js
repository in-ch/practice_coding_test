// https://school.programmers.co.kr/learn/courses/30/lessons/120866

function 안전지대(boards) {
    let _board = boards;
    let count = 0 ;
    boards.forEach((board, index) => {
        board.forEach((region, _jndex) => {
          if (region === 1) {
            for (let i = -1; i <= 1; i++) {
              for (let j = -1; j <= 1; j++) {
                const targetRowIndex = index + i;
                const targetColIndex = _jndex + j;
      
                if (
                  targetRowIndex >= 0 &&
                  targetRowIndex < boards.length &&
                  targetColIndex >= 0 &&
                  targetColIndex < board.length &&  _board[targetRowIndex][targetColIndex] !== 1
                ) {
                  _board[targetRowIndex][targetColIndex] = 2;
                }
              }
            }
          }
        });
      });

      _board.forEach((__board) => {
        __board.forEach((_region) => {
            if(_region === 0) count++;
        })
      })
    return count;
}
  
// console.log(안전지대([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]));
console.log(안전지대([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]));
// console.log(안전지대([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]));
  