// https://www.acmicpc.net/problem/14867

function solution(volumeX, volumeY, targetX, targetY) {
    let visited = new Set();

    let queue = [];
    queue.push([0, [0, 0]]);
    visited.add([0, 0].toString());

    while (queue.length > 0) {
        let [time, [currentX, currentY]] = queue.shift();

        if (currentX === targetX && currentY === targetY) {
            return time; // 도달했다.
        }

        // F(x): Fill x
        if (currentX < volumeX && !visited.has([volumeX, currentY].toString())) {
            visited.add([volumeX, currentY].toString());
            queue.push([time + 1, [volumeX, currentY]]);
        }

        // F(y): Fill y
        if (currentY < volumeY && !visited.has([currentX, volumeY].toString())) {
            visited.add([currentX, volumeY].toString());
            queue.push([time + 1, [currentX, volumeY]]);
        }

        // E(x): Empty x
        if (currentX > 0 && !visited.has([0, currentY].toString())) {
            visited.add([0, currentY].toString());
            queue.push([time + 1, [0, currentY]]);
        }

        // E(y): Empty y
        if (currentY > 0 && !visited.has([currentX, 0].toString())) {
            visited.add([currentX, 0].toString());
            queue.push([time + 1, [currentX, 0]]);
        }

        // M(x, y): Move water from x to y
        let k = Math.min(currentX, volumeY - currentY);
        if (currentX > 0 && k > 0 && !visited.has([currentX - k, currentY + k].toString())) {
            visited.add([currentX - k, currentY + k].toString());
            queue.push([time + 1, [currentX - k, currentY + k]]);
        }

        k = Math.min(currentY, volumeX - currentX);
        if (currentY > 0 && k > 0 && !visited.has([currentX + k, currentY - k].toString())) {
            visited.add([currentX + k, currentY - k].toString());
            queue.push([time + 1, [currentX + k, currentY - k]]);
        }
    }

    return -1; // 도달 못하면 -1
}


// 예제 입력
console.log(solution(3, 7, 3, 2)); // 출력: 9
console.log(solution(2, 5, 0, 1)); // 출력: 5
console.log(solution(3, 5, 2, 4)); // 출력: -1