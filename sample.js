function solution(numbers) {
    const answer = Array.from({length: numbers.length}, () => -1);
    const stack = [];

    for(let i = 0; i < numbers.length; i++) {
        while(stack.length > 0 && answer[i] < stack[stack.length - 1]) {
            answer[i] = ;
        }
        stack.push(numbers[i]);
    }
}

console.log(solution([2, 3, 3, 5])); // [3, 5, 5, -1]
console.log(solution([9, 1, 5, 3, 6, 2])); // [-1, 5, 6, 6, -1, -1]