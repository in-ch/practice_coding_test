// https://school.programmers.co.kr/learn/courses/30/lessons/118667?language=javascript
// Lv 2

function solution(queue1, queue2) {
    let answer = -1;
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);

    let idx1 = 0, idx2 = 0

    let i = 0;
    let queueLength = (queue1.length + queue2.length) * 2

    if ((sum1 + sum2) % 2 != 0) return -1;

    while(i < queueLength) {
        if(sum1 === sum2){
            answer = i;
            return answer;
        } else if(sum1 > sum2) {
            var element = queue1[idx1++]
            sum1 -= element
            sum2 += element
            queue2.push(element);
        } else if(sum1 < sum2){
            var element = queue2[idx2++]
            sum1 += element
            sum2 -= element
            queue1.push(element);
        }
        i++;
    }
    return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); // 2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); // 7
console.log(solution([1, 1], [1, 5])); // -1
