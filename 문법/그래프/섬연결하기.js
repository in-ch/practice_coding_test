// https://school.programmers.co.kr/learn/courses/30/lessons/42861
// Lv 3

// 즉 가중치의 합이 가장 작은 트리를 구현하는 문제
// 다시 말하자면 최소신장트리를 구하는 문제
// 따라서 쿠루스칼 알고리즘을 사용하여 풀이하면 된다. (프림 알고리즘도 사용 가능)

// 섬의 부모를 찾는 함수
const findParent = (parent, c) => {
    if (parent[c] === c) return c;
    return (parent[c] = findParent(parent, parent[c]));
  };
  
// 두 섬의 부모를 하나로 합치는 함수
const unionParent = (parent, c1, c2) => {
    const [n1, n2] = [findParent(parent, c1), findParent(parent, c2)];
    if (n1 < n2) parent[n2] = n1;
    else parent[n1] = n2;
};

// 두 섬의 동일 부모 여부를 조회하는 함수
const solution = (n, costs) => {
    let answer = 0;
    const parents = Array.from({ length: n }, (_, i) => i);
    costs.sort((a, b) => a[2] - b[2]);

    for (const [c1, c2, weight] of costs) {
        if (findParent(parents, c1) !== findParent(parents, c2)) {
            answer += weight;
            unionParent(parents, c1, c2);
        }
    }

    return answer;
};
  
  console.log(solution(4, [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]));