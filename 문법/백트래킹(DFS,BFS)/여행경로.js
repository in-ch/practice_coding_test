// https://school.programmers.co.kr/learn/courses/30/lessons/43164
// Lv 3

// 이렇게 풀면  단순히 항공권을 정렬하고, 순차적으로 경로를 구성하는 방식을 사용하고 있다.
// 이 방식은 모든 경우를 고려하지 않고, 특히 도중에 막힌 경우에 대한 처리가 없어 시간초과가 발생할 수 있다. 
function my_solution(tickets) {
    
    tickets.sort((a, b) => {
        return a[1].localeCompare(b[1]);
    });
    
    let [start, end] =  tickets.shift();
    const answer = [start, end];
    while(tickets.length > 0) {
        const [currentStart, currentEnd] =  tickets.shift();
        if(end === currentStart) {
            start = currentStart;
            end = currentEnd;
            answer.push(currentEnd);
        } else {
            tickets.push([currentStart, currentEnd]);
        }
    }
    debugger;
    return answer;
}

function solution(tickets) {
    const graph = {}; // 그래프를 저장할 객체
    tickets.forEach(([from, to]) => {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    });
    for (const key in graph) {
        graph[key].sort((a, b) => b.localeCompare(a));
    }
    const answer = [];

    function dfs(node) {
        const destinations = graph[node];
        while (destinations && destinations.length > 0) {
            const nextNode = destinations.pop();
            dfs(nextNode);
        }
        answer.unshift(node); // 경로를 앞에 추가
    }
    dfs("ICN");
    return answer;
}

console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]])); // ["ICN", "JFK", "HND", "IAD"]
console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]])); // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]