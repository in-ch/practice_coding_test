// https://school.programmers.co.kr/learn/courses/30/lessons/42627
// Lv 3

// 현재 시점에서 처리할 수 있는 작업들을 힙에 넣고, 하나를 뽑아 현재 시점과 총 대기시간을 구해주는 것을 모든 작업을 처리할 때까지 반복한다.
// 힙에 push를 할 때는 작업의 소요 시간 기준으로 최소힙이 만들어져야 하기 때문에 jobs의 요소를 그대로 넣지 않고 [작업의 소요 시간, 작업이 요청되는 시점]으로 요소의 앞 뒤를 바꿔서 넣어준다.

// 현재 시점에서 처리할 수 있는 작업인지를 판별하는 조건은 작업의 요청 시간이 바로 이전에 완료한 작업의 시작 시간(start)보다 크고 현재 시점(now)보다 작거나 같아야 한다.

// 만약 현재 처리할 수 있는 작업이 없다면, 남아 있는 작업들의 요청 시간이 아직 오지 않은 것이기 때문에 현재 시점(now)을 하나 올려준다.
function solution(jobs) {
    let answer = 0;
    let now = 0; // 현재 시점
    let i = 0; // 실행 횟사
    let start = -1; // 시작
    let heap = []; // 힙

    while (i < jobs.length) {
        for (let j = 0; j < jobs.length; j++) {
            if (start < jobs[j][0] && jobs[j][0] <= now) {
                heap.push([jobs[j][1], jobs[j][0]]);
                heap.sort((a, b) => a[0] - b[0]);
            }
        }
        debugger;
        if (heap.length > 0) {
            let current = heap.shift();
            start = now;
            now += current[0];
            answer += now - current[1];
            i++;
        } else {
            now += 1;
        }
    }

    return Math.floor(answer / jobs.length);
}

console.log(solution([[0, 3], [1, 9], [2, 6]])); // 9