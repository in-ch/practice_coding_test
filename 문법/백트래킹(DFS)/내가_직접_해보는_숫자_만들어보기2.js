// 배열을 받아서 나올 수 있는 모든 숫자를 리턴하자. 
// ex) [1, 2, 3] -> 근데 이번에는 겹치면 안됨 ㅋㅋㅋ
// 즉, 중복값을 제거하자. 
function _solution(array) {
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

/// 종료 조건을 for문으로 작성해보자. 
function solution(array) {
    let answer = [];
    function dfs(_array, prev) {
        for(let i = 0; i < _array.length; i++) {
            if(_array[i] === null) continue;
            answer.push(`${prev}${_array[i]}`);
            const copyArr = [..._array];
            copyArr[i] = null;
            dfs(copyArr, `${prev}${_array[i]}`);
        }
    }
    dfs(array, "");
    return answer;
}
console.log(solution([1,2,3]));
console.log(_solution([1,2,3]));
