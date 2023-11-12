function solution(priorities, location) {
    const queue = [];
    const dataset = priorities.map((priority,idx)=>{
        queue.push(priority);
        return {
            idx, 
            priority
        }
    });
    const processQueue = [];
    queue.sort(((a,b) => b- a));

    while(queue.length > 0) {
        const _prior = queue.shift();
        while(dataset[0].priority !== _prior ) {
            dataset.push(dataset.shift());
        }
        processQueue.push(dataset.shift());
    }
    const processQueueIndex = processQueue.map((v) => v.idx);
    return processQueueIndex.indexOf(location) + 1
}

console.log(solution([2, 1, 3, 2] , 2));
console.log(solution([1, 1, 9, 1, 1, 1] , 0));
