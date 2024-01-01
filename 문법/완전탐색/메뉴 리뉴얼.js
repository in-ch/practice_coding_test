// https://school.programmers.co.kr/learn/courses/30/lessons/72411

function solution(orders, course) {
    const ordered = {};
    const candidates = {};
    const maxNum = Array(10 + 1).fill(0);

    const dfs = (arr, start, len, foods) => {
      if (len === 0) {
        ordered[foods] = (ordered[foods] || 0) + 1;
        if (ordered[foods] > 1) candidates[foods] = ordered[foods];
        maxNum[foods.length] = Math.max(maxNum[foods.length], ordered[foods]);
        return;
      }
  
      for (let i = start; i < arr.length; i++) {
        dfs(arr, i + 1, len - 1, foods + arr[i]);
      }
    };

  
    orders.forEach((od) => {
      const sorted = od.split('').sort();
      course.forEach((len) => {
        dfs(sorted, 0, len, '');
      });
    });

    const launched = Object.keys(candidates).filter(
      (food) => maxNum[food.length] === candidates[food]
    );
  
    return launched.sort();
}

console.log(solution(
    ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"],
    [2,3,4,5]
)); // ["AC", "ACDE", "BCFG", "CDE"]