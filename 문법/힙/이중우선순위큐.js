// https://school.programmers.co.kr/learn/courses/30/lessons/42628
// Lv 3 

function solution(operations) {
    let queue = [];

    const removeMin = () => {
        const index = queue.findIndex(num => num === Math.min(...queue));
        queue.splice(index, 1);
    }

    const removeMax = () => {
        const index = queue.findIndex(num => num === Math.max(...queue));
        queue.splice(index, 1);
    }

    operations.forEach((operation) => {
        if (operation === "D -1") {
            removeMin();
        } else if (operation === "D 1") {
            removeMax();
        } else {
            const value = operation.split(" ")[1];
            queue.push(Number(value));
        }
    });
    return queue.length === 0 ? [0, 0] : [Math.max(...queue), Math.min(...queue)];;
}

console.log(solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])); // [0,0]
console.log(solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"])); // [333, -45]