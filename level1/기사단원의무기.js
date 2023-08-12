// https://school.programmers.co.kr/learn/courses/30/lessons/136798

/**
 * @param n number 약수를 구하려는 자연수
 * @description 약수를 구한다.
 */

/// 약수를 구할 때는 이걸 쓰자. 성능이 훨씬 좋다. 
function count_divisors(n) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (n / i === i) {
        count++;
      } else {
        count += 2;
      }
    }
  }
  return count;
}

function solution(number, limit, power) {
  const knights = new Array(number).fill().map((_, index) => index + 1).map((i)=> count_divisors(i));
  return knights.reduce((acc, cur) => {
    return acc + (cur > limit ? power : cur); 
  }, 0)
}

console.log(solution(5,3,2));
console.log(solution(10,3,2));
