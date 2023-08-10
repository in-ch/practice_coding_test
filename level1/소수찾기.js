// https://school.programmers.co.kr/learn/courses/30/lessons/12921

function isPrime(number) {
  if (number <= 1) {
      return false;
  }
  if (number === 2) {
      return true;
  }
  if (number % 2 === 0) {
      return false;
  }
  const sqrt = Math.sqrt(number);
  for (let divisor = 3; divisor <= sqrt; divisor += 2) {
      if (number % divisor === 0) {
          return false;
      }
  }
  return true;
}

function solution(n) {
  let count = 0;
  new Array(n).fill().map((_, index) => index + 1).map((v) => {
    isPrime(v) && count++;
  }); 
  return count;
}

solution(10);
solution(5);
