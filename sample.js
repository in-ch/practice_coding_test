function solution(N, seq) {
    const count = {};
    const stack = [];
    const results = Array.from({length: N}, () => -1);
    seq.forEach((number) => {
        count[number] = (count[number] || 0) + 1;
    });

    seq.forEach((number) => {
        let lastIndex = number.length - 1;
        if(count[number] > count[stack[lastIndex]]) {
            let backTrackingIdx = 0;
            while(count[number] > count[stack[lastIndex + backTrackingIdx]]) {
                if(results[stack[lastIndex + backTrackingIdx]] === -1) {
                    results[stack[lastIndex + backTrackingIdx]] = number;
                }
                backTrackingIdx++;
            }
        }
        stack.push(number);
    });

    return results;
}


console.log(solution(7, [1, 1, 2, 3, 4, 2, 1])); // -1 -1 1 2 2 1 -1