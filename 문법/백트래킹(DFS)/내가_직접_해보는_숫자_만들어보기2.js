// 배열을 받아서 나올 수 있는 모든 숫자를 리턴하자. 
// ex) [1, 2, 3] -> 근데 이번에는 겹치면 안됨 ㅋㅋㅋ
// 즉, 중복값을 제거하자. 
function solution(array) {
    let numStr = "";
    let numArr = [];
    let currentCursor = 0;

    function dfs(num) {
        if(numStr.length > array.length - 1) return;
        if (numStr.lastIndexOf(array[num]) !== -1) return;
        numStr = numStr + `${array[num]}`;
        numArr.push(numStr);
        for(let j = 0; j < array.length; j++) {
            dfs(j);
        }
        numStr = numStr.slice(0, -1);
    }
    for(let i = 0; i < array.length; i++) {
        currentCursor = i;
        dfs(i);
    }
    return numArr;
}

console.log(solution([1,2,3]));