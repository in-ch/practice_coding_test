// https://school.programmers.co.kr/learn/courses/30/lessons/42862
// Lv 1
function solution(n, lost, reserve) {
    let answer = 0;
    lost = lost.sort((a, b) => a - b);    
    reserve = reserve.sort((a, b) => a - b);

    for(let i = 1; i <= n; i++) {
        if (lost.indexOf(i) < 0) {
            answer++;
        }
        else {
            if (reserve.indexOf(i - 1) >= 0 && lost.indexOf(i-1) < 0) {
                answer++;
                reserve = reserve.filter((element) => element !== (i-1));
            } 
            else if (reserve.indexOf(i + 1) >= 0 && lost.indexOf(i+1) < 0) {
                answer++;
                reserve = reserve.filter((element) => element !== (i+1));
            }
            else if (reserve.indexOf(i) >= 0) {
                answer++;
                reserve = reserve.filter((element) => element !== (i));
            }
            else {
                continue;
            }
        }
    }
    return answer;
}

console.log(solution(5, [2, 4], [1,3,5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
console.log(solution( 10, [4, 7], [1, 6, 8])) // 9
console.log(solution(30, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30])) // 30
console.log(solution(5, [4,5], [3,4])) // 4
console.log(solution(5, [1,2,3], [2,3,4])) // 4

