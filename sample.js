
function findParent(c, p) {
    if(p[c] === c) return c;
    return p[c] = findParent(p[c], p);
}

function unionParent(c1, c2, p) {
    const findedP1 = findParent(c1, p);
    const findedP2 = findParent(c2, p);
    if(findedP1 < findedP2) p[findedP2] = findedP1;
    else p[findedP1] = findedP2;
}


const solution = (n, costs) => {
    const parents = Array.from({length: n}, (_, i) => i);
    let answer = 0;

    costs.forEach((cost) => {
        const [child1, child2, weight] = cost;
        // 부모가 같은 지 비교하고 아닐 경우 
        if(findParent(child1, parents) !== findParent(child2, parents)) {
            answer += weight;
            // 부모를 합친다.
            unionParent(child1, child2, parents)
        }
    });

    return answer;
}

console.log(solution(4, [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]));