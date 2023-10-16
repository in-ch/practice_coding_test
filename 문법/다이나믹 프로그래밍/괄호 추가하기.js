// 문제
// https://www.acmicpc.net/problem/16637

// 알고보니 다이나믹 프로그래밍이라고 하니 문제를 나중에 옮기도록 하자. 

function calculate(n1, n2, s) {
    let result = 0;
    if (s === '+') {
      result = n1 + n2;
    } else if (s === '-') {
      result = n1 - n2;
    } else if (s === '*') {
      result = n1 * n2;
    }
    return result;
  }
  
  function solution(N, _input) {
    
    let input = [..._input];
    const A = []; // +, -, * 등의 수식 배열
    const Num = []; // 숫자가 저장될 배열
    const dp = new Array(N + 1).fill(0); 
    
    // 입력값을 숫자와 연산자로 분리
    for (let i = 1; i <= N; i++) {
      if (i % 2 === 1) {
        // shift는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환한다. -> 실제 배열의 길이를 변화하게 된다.
        // array가 [1,2,3] 이라고 한다면, array.shift() -> 1
        Num[i] = parseInt(input.shift());
      } else {
        A[i] = input.shift();
      }
    }
    
    /// 길이가 1이면 굳이 연산을 할 필요가 없으니 그대로 결과값을 리턴
    if (N === 1) return Num[1];
    
    dp[1] = Num[1];
    dp[3] = calculate(Num[1], Num[3], A[2]);
  
    // 길이가 3이면 굳이 더 연살할 필요가 없으니 그대로 결과값을 리턴
    if (N === 3) return dp[3];
    
    
    // 다이나믹 프로그래밍을 사용하여 최댓값을 계산. dp 배열에 중간 결과를 저장하고, 마지막에 dp[N]를 반환하여 최종 최댓값을 출력
    // *** dp[i]는 길이가 i인 식의 계산 결과 중 최댓값을 의미한다. ***
    for (let i = 5; i <= N; i += 2) {
      dp[i] = Math.max(
        calculate(dp[i - 2], Num[i], A[i - 1]),
        calculate(dp[i - 4], calculate(Num[i - 2], Num[i], A[i - 1]), A[i - 3])
      );
    }
  
    return dp[N];
  }

console.log(solution(9, "3+8*7-9*2"));
// console.log(solution(19, "1*2+3*4*5-6*7*8*9*0"));
// console.log(solution(19, "1*2+3*4*5-6*7*8*9*9"));
  