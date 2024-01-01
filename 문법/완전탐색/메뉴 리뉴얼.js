// https://school.programmers.co.kr/learn/courses/30/lessons/72411
// Lv 2

// 순서를 지키고 싶다면 dfs 안에서 i를 0부터 시작하는 게 아니라 start로 주면 된다. 
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

function mysolution(orders, course) {
    const answer = [];
    const ordered = {};
    const candidates = {};
    const maxNum = Array(10 + 1).fill(0);

    const dfs = (str, arr, start) => {
        if(str.length === arr.length) return;
        let newStr = `${str}`;
        let newArr = [...arr];
        if(arr[start] !== null) {
            newStr = `${str}${arr[start]}`;
            newArr[start] = null;
            answer.push(newStr);
            ordered[newStr] = ordered[newStr] === undefined ? 1 : ordered[newStr] + 1;
            for(let i = start; i < arr.length; i++) {
                dfs(newStr, newArr, i);
            }
        }
    };

    orders.forEach((order) => {
        const sorted = [...order].sort();
        for(let i = 0; i < sorted.length; i++) {
            dfs("", sorted, i);
        }
    });
    debugger;
    
}

console.log(solution(
    ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"],
    [2,3,4,5]
)); // ["AC", "ACDE", "BCFG", "CDE"]