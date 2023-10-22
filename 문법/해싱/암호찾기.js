// https://www.acmicpc.net/problem/21559
// Lv 2

/**
 * @param inputStr 입력받은 문자열
 * @param n 자를 문자 수
 * @description 입력받은 문자열에서 n을 받아서 n길이만큼 잘라서 배열을 리턴한다.
 * @return 자른 문자열들을 담은 배열
 */
 function generateSubstrings(inputStr, n) {
    const substrings = [];
  
    for (let i = 0; i <= inputStr.length - n; i++) {
      const substring = inputStr.slice(i, i + n);
      substrings.push(substring);
    }
  
    return substrings;
  }
  
  /**
   * @param 문자열의 길이 N과 뽑아낼 수의 자릿수 K
   */
  function 암호찾기(NK, A, B) {
    let count = 0;
    const k = NK.split(" ")[1] * 1;
    const aSet = new Set();
  
    const splitedA = generateSubstrings(A, k);
    const splitedB = generateSubstrings(B, k);
  
    splitedA.forEach((_a) => aSet.add(_a));
    splitedB.forEach((_b) => aSet.has(_b) && count++);
  
    return count;
  }

// const data = require('fs').readFileSync('/Users/seonginch/Desktop/dashboard/practice_coding_test/문법/해싱/암호찾기.txt').toString().split('\n');


// console.log(data[0], data[1], data[2]);
// console.log(암호찾기(data[0], data[1], data[2]));
  
  
// console.log(암호찾기("4 2", "1122", "6677")); // 0 
console.log(암호찾기("3 1", "122", "221")); // 2
// console.log(암호찾기("3 2", "124", "248")); // 1 
  