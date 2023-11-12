// https://school.programmers.co.kr/learn/courses/30/lessons/181188#qna
// Lv 2
function solution(targets) {
    targets.sort((a, b) => b[0] - a[0]);
    let count = 1;

    const first = targets.shift();
    let standard = first[0];

    targets.forEach(([start, end]) => {
      if (end <= standard) {
        count += 1;
        standard = start;
      }
    });
    return count;
}


console.log(solution([[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]])) // 3