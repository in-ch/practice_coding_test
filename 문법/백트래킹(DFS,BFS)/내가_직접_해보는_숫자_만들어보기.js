// 배열을 받아서 나올 수 있는 모든 숫자를 리턴하자. 
// ex) [1, 2, 3] -> 1, 2, 3 , 1, 11, 111, .... 12, 13, 21, 23, 123, 231,.... 321
function solution(array) {
    let numStr = "";
    let numArr = [];

    function dfs(num) {
        if(numStr.length > array.length - 1) return;
        numStr = numStr + `${array[num]}`;
        numArr.push(numStr);
        for(let j = 0; j < array.length; j++) {
            dfs(j);
        }
        numStr = numStr.slice(0, -1);
    }
    for(let i = 0; i < array.length; i++) {
        dfs(i);
    }
    return numArr;
}

console.log(solution([1,2,3]));
