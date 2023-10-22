// https://school.programmers.co.kr/learn/courses/30/lessons/154539
// Lv 2

// 내가 푼거 ㅋㅋ 
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

// 이렇게 풀지 말고 백트래킹을 사용해 보자.. 
// 이렇게 풀게되면 배열은 한 번만 반복하게 되며, 각 요소는 스택에 한 번만 push하고 한 번만 pop하게 된다.
// 전체적인 개념은 스택을 사용하는 것인데 
// 일단 스택 구조를 쌓아가게 되고 number에서 스택에 쌓인 값들을 비교해서 -1인 경우 (-1이 아닌 경우에는 이미 값이 바뀌엿다는 거니깐) 
// 뒤로가면서 값들을 변경해준다. 
function solution(numbers) {
    const stack = [];
    const result = Array(numbers.length).fill(-1);

    numbers.forEach(number=>{
        let sLastIdx = stack.length - 1;
        // 자신보다 뒤에 있는 숫자 중에서 큰 값일때 처리 
        // stack에 점점 값을 추가해간다. 
        // 처음에는 sLastIdx가 -1이므로 stack[sLastIdx]은 당연히 undefined이 나오므로
        // 첫번째 루프는 바로 stack에 값이 추가된다. 
        // 두번째 루프에서 (number = 3), 3이 2보다 크다는 것은 일단 뒤에 있는 큰수라는 뜻이다. 
        if(number > stack[sLastIdx]){
            let backTrackingIdx = 0;

            // backTrackingIdx 변수를 사용하여 스택을 역추적하면서, 
            // 현재 숫자 number보다 큰 숫자를 찾으면 result 배열에 해당 값을 저장.
            // 이때, 이미 result 배열에 값이 저장된 경우(값이 -1이 아닌 경우), 더 큰 숫자를 찾는 작업을 중단하고 다음으로 넘어간다. 
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
