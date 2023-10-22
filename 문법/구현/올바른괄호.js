// https://school.programmers.co.kr/learn/courses/30/lessons/12909 
// Lv 2 
function solution(s) {
    const strings = [...s];
    const array1 = [];
    const result = false;

    for(let i = 0;i < strings.length; i++) {
        let pointer = strings[i];
        /// 만약 array2에 값이 추가되야 하는데 array1이 비어있다면 바로 false이다. 
       if(pointer === ')' && array1.length ===0) return false;

       if(pointer === '(') array1.push("(");
       else {
        array1.pop();
       }
    }

    return array1.length === 0;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
