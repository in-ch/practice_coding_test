// https://school.programmers.co.kr/learn/courses/30/lessons/42626
// Lv2

// 음식을 섞습니다. 
function doMix(min, max) {
    return min + (max * 2);
}

// scoville.sort((a, b) => a - b)를 통해 스코빌 지수 배열을 정렬하는 부분은 O(n log n)의 시간 복잡도를 갖는다. 
// 정렬된 배열에서 가장 작은 두 개의 스코빌 지수를 추출하고, 새로운 스코빌 지수를 계산한 후, 배열에 다시 추가하는 과정이 수행된다. -> 이 작업 역시 O(n)의 시간이 걸린다. 
function _solution(scoville, K) {
    // 섞은 횟수
    let mixCount = 0;
    while(scoville.filter(v => v < K).length !== 0) {
        const newScoville = scoville.sort((a, b) => a - b);
        const min = newScoville.shift();
        const min2 = newScoville.shift();
        const newK = doMix(min, min2);
        newScoville.push(newK);
        mixCount++;
    }

    return mixCount;
}




// 우선 순위 큐를 이용해서 풀어보자. 
class PriorityQueue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
        this.heapifyUp();
    }
    dequeue() {
        if (this.isEmpty()) return null;
        if (this.size() === 1) return this.items.pop();

        const root = this.items[0];
        this.items[0] = this.items.pop();
        this.heapifyDown();
        return root;
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    heapifyUp() {
        let currentIndex = this.size() - 1;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.items[currentIndex] >= this.items[parentIndex]) {
                break;
            }
            [this.items[currentIndex], this.items[parentIndex]] = [this.items[parentIndex], this.items[currentIndex]];
            currentIndex = parentIndex;
        }
    }
    heapifyDown() {
        let currentIndex = 0;
        const leftChildIndex = (index) => 2 * index + 1;
        const rightChildIndex = (index) => 2 * index + 2;

        while (leftChildIndex(currentIndex) < this.size()) {
            let smallerChildIndex = leftChildIndex(currentIndex);
            if (rightChildIndex(currentIndex) < this.size() &&
                this.items[rightChildIndex(currentIndex)] < this.items[leftChildIndex(currentIndex)]) {
                smallerChildIndex = rightChildIndex(currentIndex);
            }

            if (this.items[currentIndex] <= this.items[smallerChildIndex]) {
                break;
            }

            [this.items[currentIndex], this.items[smallerChildIndex]] = [this.items[smallerChildIndex], this.items[currentIndex]];
            currentIndex = smallerChildIndex;
        }
    }
}

function solution(scoville, K) {
    const pq = new PriorityQueue();

    for (const scovilleValue of scoville) {
        pq.enqueue(scovilleValue);
    }

    let mixCount = 0;

    while (pq.size() > 1 && pq.items[0] < K) {
        const min1 = pq.dequeue();
        const min2 = pq.dequeue();
        const newScoville = min1 + (min2 * 2);
        pq.enqueue(newScoville);
        mixCount++;
    }

    return pq.items[0] >= K ? mixCount : -1;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2