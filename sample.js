function solution(numbers) {
    const answer = [];

    while(numbers.length > 0) {
        const cursor = numbers.shift();
        const rest = [...numbers];
        let left = -1
        while(left <= cursor){
            left = rest.shift();
        }
        answer.push(left ? left : -1);
    }
    return answer;
}

console.log(solution([2, 3, 3, 5])); // [3, 5, 5, -1]
console.log(solution([9, 1, 5, 3, 6, 2])); // [-1, 5, 6, 6, -1, -1]