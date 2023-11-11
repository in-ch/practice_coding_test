// https://school.programmers.co.kr/learn/courses/30/lessons/42587
// Lv 2 

// 우선순위와 idx를 담은 배열 형태의 dataset 변수 생성
// 우선순위를 체크하고 문제가 없다면 해당 우선순위를 1로 설정 (copyPriorities)
// location이 idx와 맞으면 break로 빠르게 종료
// 주의할 점 : copyPriorities[idx] = 1 대신 copyPriorities.splice(idx,1)이 물론 간단 테스트케이스에서 가능은 합니다만
// Solve는 불가능한 시간초과가 발생하게 되므로 가능한 접근하여 처리하는 것을 추천합니다.
function solution(priorities, location) {
    const copyPriorities = [...priorities]
    const dataset = priorities.map((priority,idx)=>({priority,idx}))
    let excuteCount = 0

    while(dataset.length !== 0){
        const maxValue = Math.max(...copyPriorities)
        const {priority,idx} = dataset.shift();
        // 같으면 실행 순서를 증가시킨다. 
        if(priority >= maxValue){
            excuteCount++
            copyPriorities[idx] = 0
            if(idx === location){
                break;
            }
        }
        else{
            dataset.push({priority,idx})
        }
    }
    return excuteCount
}


// 코드가 더럽긴 한데 이렇게해서 다시 풀어봄 
function mySolution(priorities, location) {
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

console.log(solution([2, 1, 3, 2], 2));
// console.log(solution([1, 1, 9, 1, 1, 1], 0));
