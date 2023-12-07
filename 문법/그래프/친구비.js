// https://www.acmicpc.net/problem/16562

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

/**
 * @param {number} N 학생 수 
 * @param {number} M 친구 관계 수 
 * @param {number} k 총 주어진 돈 
 * @param {number[]} 친구비 목록
 * @param {number[][]} 관계 수
*/
function solution(N, M, k, friendFees, relations) {
    let answer = 0;
    const rels = relations.map(([f1, f2]) => {
        return [f1 - 1, f2 - 1, Math.min(...[friendFees[f1 - 1], friendFees[f2 - 1]])];
    });
    rels.sort((a, b) => a[2] - b[2]); 
    const parents = Array.from({ length: rels.length }, (_, i) => i);

    for (const [c1, c2, weight] of rels) {
        if (findParent(parents, c1) !== findParent(parents, c2)) {
            answer += weight;
            unionParent(parents, c1, c2);
        }
    }
    return answer <= k ? answer : "Oh no"; // 돈이 부족한 경우 "Oh no" 반환
}

console.log(solution(5, 3, 20, [10, 10, 20, 20, 30], [[1,3], [2,4], [5, 4]])); // 20