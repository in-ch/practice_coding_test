// https://school.programmers.co.kr/learn/courses/30/lessons/42839
// Lv2
// 완탐의 탈을 쓴 DFS

function solution(numbers) {
    const usedIdx = new Set();
    const usedNum = new Set();
    let numStr = "";
    let answer = 0;
  
    function isPrime(number) {
        if (usedNum.has(number)) {
            return false;
        }
        if (number < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        usedNum.add(number);
        return true;
    }

    // index는 만들 숫자의 길이 숫자이다. 
    function dfs(index) {
        if (usedIdx.size === numbers.length) {
            return;
        }
        if (!usedIdx.has(index)) {
            usedIdx.add(index);
            numStr += numbers[index];
            // debugger;
        } else {
            return;
        }
        if (numStr.length > 0 && isPrime(parseInt(numStr))) {
            answer++;
        }
  
        for (let i = 0; i < numbers.length; i++) {
            console.log('qq  ' + numStr)
            dfs(i);
        }
  
        if (usedIdx.has(index)) {
            usedIdx.delete(index); 
            numStr = numStr.slice(0, -1); // numStr에서 맨 뒤 숫자를 하나 뺀다.
            // debugger;
        }
    }
  
  
    for (let i = 0; i < numbers.length; i++) {
        console.log('zz  ' + numStr);
      dfs(i);
    }
  
    return answer;
}

console.log(solution("17")); // 3
// console.log(solution("011")); // 3
// 0 1 1 11 110 101