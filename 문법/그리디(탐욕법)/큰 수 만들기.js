// https://school.programmers.co.kr/learn/courses/30/lessons/42883
// Lv 2


// 이렇게 풀면 타임 아웃이 나버린다..
// 자릿수가 1,000,000자리까지 올 수 있으니깐... 음...  
function _solution(number, k) {
    const answers = [];
    const numbers = [...number].map(Number);
    const numObj = {};

    numbers.map((_number, index) => {
        numObj[index] = _number;
    });


    function dfs(_array, prev, prevIndex) {
        if (prev.length === (numbers.length - k)) {
            answers.push(prev, prevIndex);
            return;
        }
        for (let i = 0; i < _array.length; i++) {
            if(i < prevIndex) continue;
            const copyArr = [..._array];
            copyArr.splice(i, 1);
            dfs(copyArr, prev + _array[i], i);
        }
    }

    dfs(numbers,"", -1);


    return answers.sort((a, b) => b - a)[0];
}

// 다른 방식으로 풀려면 스택을 활용해서 푸는 방법이 있다. 
function _solution(number, k) {
    const stack = [];
    let removed = 0;

    for (let digit of number) {
        while (removed < k && stack.length > 0 && stack[stack.length - 1] < digit) {
            stack.pop();
            removed++;
        }
        stack.push(digit);
    }

    while (removed < k) {
        stack.pop();
        removed++;
    }

    return stack.join("");
}

function solution(numbers, k) {
    const stack = [];
    let removeCount = 0;
    
    for(let num of numbers){
        while(stack.at(-1) < num && removeCount < k){
            stack.pop();
            removeCount++;
        }
        stack.push(num);
    }
    
    // 아직 removed까지 못갔다면 그때까지 갈때까지 또 뒤에서 빼준다.
    while (removeCount < k) {
        stack.pop();
        removeCount++;
    }
    return stack.join("");
}

console.log(solution("1924", 2));  // "94"
console.log(solution("1231234", 3)); // "3234"
console.log(solution("4177252841", 4)); // "775841"
