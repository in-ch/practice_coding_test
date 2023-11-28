// https://school.programmers.co.kr/learn/courses/30/lessons/42584
// Lv 2

// 효율성에서 떨어짐 
// 일단 저런 식으로 매번 queue를 선언한다는 것 자체가 문제임.... 저러면 안됨.. 
function solution(prices) {
    const results = [];

    prices.forEach((price, index) => {
        const queue = prices.slice(index + 1, prices.length);
        let count = 0;
        while(queue.length > 0 && !(queue[0] < price)) {
            count++;
            queue.shift();
        }
        if(index !== prices.length - 1 && count === 0)  {
            results.push(1);
        } else {
            results.push(count);
        }
    });
    return results;
}
// 이 코드는 단일 루프로 배열을 한 번만 통과하므로 시간 복잡도 O(n)이다. 
// 스택은 현재 시점에서 낮아진 가격에 대한 인덱스를 저장하고, 가격이 상승할 때 해당 위치의 인덱스와의 차이를 계산하여 결과를 구한다. 
// 첫 번째 루프 (for 루프): 주어진 배열의 길이 n에 대해 한 번 반복한다. 
// i는 0부터 n-1까지 증가하며, 각 반복에서 스택에 값을 추가하거나 스택에서 값을 제거한다. 
// 각 요소는 최대 한 번 스택에 추가되고 최대 한 번 스택에서 제거된다. 
// 따라서 스택 조작은 모든 요소에 대해 총 두 번만 수행된다. 이 루프 자체는 O(n)이다.

// 두 번째 루프 (while 루프): 스택에 남아 있는 인덱스를 처리하는 루프이다. 
// 스택의 크기는 최대 n이 될 수 있으며, 각 반복에서 스택의 가장 위의 값에 대한 연산을 수행한다. 
// 따라서 이 루프도 O(n)이다.

// 두 루프의 시간 복잡도가 서로 곱해지지 않고 각각 O(n)이기 때문에 O(n)이 된다.
function solution(prices) {
    const n = prices.length;
    const answer = new Array(n).fill(0);
    const stack = [];

    for (let i = 0; i < n; i++) {
        // prices[stack[stack.length -1]]는 이전 값이다. 
        // 이전 값보다 현재 루프의 price가 작으면 아래 수행 (밑에 pop을 하므로 스택값이 줄어들어서 계속 비교 가능)
        // 첫번쨰 인자 예제로 4번째 루프 (priceI가 2일때 드디어 while 실행)
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            const top = stack.pop();
            answer[top] = i - top;
            debugger;
        }
        stack.push(i);
        debugger;
    }

    while (stack.length > 0) {
        const top = stack.pop();
        answer[top] = n - 1 - top;
    }

    return answer;
}

console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
// console.log(solution([5,4,3,2,5])); // [1,1,1,1,0]
