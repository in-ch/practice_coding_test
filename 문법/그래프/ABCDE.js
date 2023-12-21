// https://www.acmicpc.net/problem/13023
function findParent(c, parents) {
    if(parents[c] === c) return c;
    return parents[c] = findParent(parents[c], parents);
}

function unionParent(p1, p2, parents) {
    const [n1, n2] = [findParent(p1, parents), findParent(p2, parents)];
    if(n1 < n2) parents[n2] = n1;
    else parents[n1] = n2;
}

function solution(length, array) {
    const parents = Array.from({ length }, (_, i) => i);

    array.sort((a, b) => a[1] - b[1]);

    array.forEach((arr) => {
        const [left, right] = arr;
        if(findParent(left, parents) !== findParent(right, parents)) {
            unionParent(left, right, parents);
        }
    });
    const uniqueParents = [...new Set(parents)];
    return uniqueParents.length;
}

console.log(solution(5, [[0, 1], [1, 2], [2, 3], [3, 4]])); // 1
console.log(solution(5, [[0, 1], [1, 2], [2, 3], [3, 0], [1, 4]])); // 1
console.log(solution(6, [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5]])); // 1
console.log(solution(8, [[1, 7], [3, 7], [4, 7], [3, 4], [4, 6], [3, 5], [0, 4], [2, 7]])); // 1