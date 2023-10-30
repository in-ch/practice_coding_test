// https://school.programmers.co.kr/learn/courses/30/lessons/42746
// Lv 2 

function solution(numbers) {
    numbers.sort((a,b) => `${a}${b}` > `${b}${a}` ? -1 : 1);
    //return Number(numbers.join('')).toString(); // 숫자가 크면 면 1.11111110101101e+21 이딴 식으로 나옴. 
    const result = numbers.join('');
    return result[0] === '0' ? '0' : result;
}

console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([0, 0, 0]));
console.log(solution([1000, 111, 110, 101, 100, 11, 10, 1, 0])); // 숫자가 크면 면 1.11111110101101e+21 이딴 식으로 나옴. 

