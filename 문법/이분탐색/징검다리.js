// https://school.programmers.co.kr/learn/courses/30/lessons/43236
// Lv 4

function solution(distance, rocks, n) {
    rocks.sort((a, b) => a - b);
    
    let left = 1; // 최소 거리의 최솟값
    let right = distance; // 최소 거리의 최댓값
    let answer = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let removedRocks = 0; // 제거한 바위의 수
        let prevRock = 0; // 이전 바위의 위치
        let minDistance = Infinity; // 최소 거리

        // 바위 제거를 시도하면서 최소 거리를 갱신
        for (const rock of rocks) {
            if (rock - prevRock < mid) {
                // mid보다 작은 간격에 있는 바위는 제거
                removedRocks++;
            } else {
                // mid 이상의 간격이면 최소 거리 갱신
                minDistance = Math.min(minDistance, rock - prevRock);
                prevRock = rock;
            }
        }

        // 마지막 바위까지 확인 후 마지막 바위와 도착 지점 간의 거리 확인
        if (distance - prevRock < mid) {
            removedRocks++;
        } else {
            minDistance = Math.min(minDistance, distance - prevRock);
        }

        // 제거한 바위의 수가 주어진 n값 이하인 경우
        if (removedRocks <= n) {
            // 최소 거리를 늘려서 더 큰 값을 찾기 위해 left 갱신
            left = mid + 1;
            // 현재 최소 거리 중 가장 큰 값을 저장
            answer = Math.max(answer, minDistance);
        } else {
            // 제거한 바위의 수가 n보다 큰 경우
            // 최소 거리를 줄여서 더 작은 값을 찾기 위해 right 갱신
            right = mid - 1;
        }
    }

    return answer;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2)); // 출력: 4