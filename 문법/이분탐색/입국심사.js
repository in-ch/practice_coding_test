// https://school.programmers.co.kr/learn/courses/30/lessons/43238
// Lv 3

function anotherSolution(n, times) {
    let min = Math.floor(n / times.reduce((acc, time) => {
        return (acc + 1 / time);
    }, 0));
    // n이 10이고 times 배열이 [1, 2, 3]인 경우
    // Math.floor(10 / ((1 / 1) + (1 / 2) + (1 / 3))) = 6 
    // 실제 인자값으로 풀어쓰면 
    // Math.floor(6 / (1/7 + (1/10)))

    let max = Math.max(...times) * Math.ceil(n / times.length);
    // max = Math.max(1, 2, 3) * Math.ceil(10 / 3) = 12

    console.log(Math.max(1, 2, 3) * Math.ceil(10 / 3));


    // max: 30 
    // min: 24
    while (max > min) {
        const mid = Math.floor((min + max) / 2);
        let left = n;
        for (const time of times) {
            if ((left -= Math.floor(mid / time)) <= 0) break;
        }
        if (left <= 0) max = mid;
        else min = mid + 1;
    }

    return min;
}


// while  조건문이랑 Math.floor를 쓸 것을 일단 암기 -> 여러 조건이 가능하나 복잡해지니 걍 두개만 외우자.
function solution(n, times) {
    let min = 0 , max = n * Math.max(...times);
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);

        //  주어진 시간 동안 완료할 수 있는 최대 작업 수를 계산
        let maxInMid = times.reduce((acc,cur)=>acc += Math.floor(mid/cur) , 0);

        if( n <= maxInMid) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    return min;
}

console.log(solution(6, [7, 10])); // 28
