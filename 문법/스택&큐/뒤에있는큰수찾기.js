
/// 내가 푼거 ㅋㅋ 
function checkVal(_firstVal, _numbers) {
    let val = -1;
    for(let i = 0; i < _numbers.length; i++) {
        if(_numbers[i] > _firstVal) {
            val = _numbers[i];
            break;
        }
    }
    return val;
}
function mySolution(numbers) {
    let answer = [];
    while(numbers.length > 0) {
        const firstVal = numbers.shift();
        answer.push(checkVal(firstVal, numbers));
    }
    return answer;
}

/// 이렇게 풀지 말고 백트래킹을 사용해 보자.. 
function solution(numbers) {
    const stack = [];
    const result = Array(numbers.length).fill(-1);

    numbers.forEach(number=>{
        const sLastIdx = stack.length - 1;
        // 자신보다 뒤에 있는 숫자 중에서 큰 값일때 처리 
        // stack에 점점 값을 추가해간다. 
        // 처음에는 sLastIdx가 -1이므로 stack[sLastIdx]은 당연히 undefined이 나오므로
        // 첫번째 루프는 바로 stack에 값이 추가된다. 
        if(number > stack[sLastIdx]){
            let backTrackingIdx = 0

            while(number > stack[sLastIdx-backTrackingIdx]){
                // 처음 접근하는 값일 때만 적용 
                if(result[sLastIdx-backTrackingIdx] === -1){
                    result[sLastIdx-backTrackingIdx] = number
                }
                backTrackingIdx++
            }
        }
        stack.push(number)
    })
    return result
}

console.log(solution([2, 3, 3, 5])); // [3, 5, 5, -1]
console.log(solution([9, 1, 5, 3, 6, 2])); // [-1, 5, 6, 6, -1, -1]
