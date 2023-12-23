// https://www.acmicpc.net/problem/2866

function makeStrs(strs, num) {
    const results = [];
    for(let j = 0; j < strs[0].length; j++) {
        let str = "";
        for(let i = num; i < strs.length; i++) {
            var array = [...strs[i]];
            str = str + array[j];
        }
        results.push(str);
    }
    return results;
}
/**
 * @param arr strings 
 * @return 겹치는 게 없다면 true, 있으면 false
*/
function hasNoDuplicate(arr) {
    const uniqueSet = new Set(arr);
    return uniqueSet.size === arr.length;
  }

function solution(strs) {
    let start = 0;
    let end = strs.length - 1;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        const strings = makeStrs(strs, mid);
        if(hasNoDuplicate(strings)) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return end;
};

console.log(solution([
    'dobarz',
    'adatak'
])); // 0

console.log(solution([
    'alfa',
    'beta',
    'zeta'
])); // 2

console.log(solution([
    'mrvica',
    'mrvica',
    'marica',
    'mateja'
])); // 1

