// https://school.programmers.co.kr/learn/courses/30/lessons/150369

function solution(cap, n, deliveries, pickups) {
    let ans = 0;
    let box = 0;
    // 뒤에 0인 곳이 있다면 싹다 지워준다. 
    while(deliveries[n-1] === 0 && pickups[n-1] === 0) {
        deliveries.pop();
        pickups.pop();
        n--;
    }
    let distance = n;
    while(deliveries.length !== 0 || pickups.length !== 0) { 
        while(deliveries.length !== 0) {
            box += deliveries.pop();
            if(box > cap) {
                deliveries.push(box - cap)
                break;
            };
        }
        box = 0;
        while(pickups.length!==0) {
            box += pickups.pop();
            if(box > cap) {
                pickups.push(box - cap)
                break;
            };
        }
        box = 0;
        ans += distance;
        distance = Math.max(deliveries.length, pickups.length);
    }
    return ans*2;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0])); // 16
console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0])); // 30
