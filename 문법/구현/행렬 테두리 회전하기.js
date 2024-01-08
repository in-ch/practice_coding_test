// https://school.programmers.co.kr/learn/courses/30/lessons/77485
// Lv 2
const deepCopyArray = (arr) => JSON.parse(JSON.stringify(arr));

function makeMoveCircle(start, end) {
    const arr = [];
    let [_sc, _sr] = start; // [2, 2]
    let [_ec, _er] = end;   // [5, 4]
    arr.push([_sc - 1, _sr - 1]);
    // ➡️ 에 맞게 arr에 값 넣기
    for(let i = _sr; i < _er; i++) {
        arr.push([_sc - 1, i]);
    }
    // ⬇️ 에 맞게 arr에 값 넣기
    let last = 0;
    for(let i = _sc; i < _ec; i++) {
        arr.push([i, _er - 1]);
    }
    // ⬅️ 에 맞게 arr에 값 넣기 
    for(let i = _er - 2; i >= _sr - 1 ; i--) {
        arr.push([_ec - 1, i]);
    }
    // ⬆️ 에 맞게 arr에 값 넣기
    for(let i = _ec - 2; i >= _sc; i--) {
        arr.push([i, _sc - 1]);
    }
    
    return arr;
}
function rotateArr(arr) {
    arr.unshift(arr.pop());
    return arr;
}

function solution(rows, columns, queries) {
    let answer = [];
    let array = Array.from({length: columns}, (_, i) => Array.from({length: rows}, (_, j) => (rows * i) + j + 1));
    

    queries.forEach((query) => {
        const [startCol, startRow, endCol, endRow] = query;

        const moveCircle = makeMoveCircle([startCol,startRow], [endCol,endRow]);
        const rotateCircle = rotateArr([...moveCircle]);
        
        let aa = [];
        let originArray = deepCopyArray(array);

        moveCircle.forEach((mm, index) => {
            const [c, r] = rotateCircle[index];
            if(array[mm[0]] === undefined|| array[mm[0]][mm[1]] === undefined || originArray[c] === undefined || originArray[c][r] === undefined ) return [1];
            array[mm[0]][mm[1]] = originArray[c][r];
            aa.push(originArray[c][r]);
        });
        answer.push(Math.min(...aa));
    });

    return answer;
}

console.log(solution(6, 6, 	[
                                [2,2,5,4],
                                [3,3,6,6],
                                [5,1,6,3]
                            ])); // [8, 10, 25]

console.log(solution(3, 3, 	[
                                [1,1,2,2],
                                [1,2,2,3],
                                [2,1,3,2],
                                [2,2,3,3]
                            ])); // [1, 1, 5, 3]


console.log(solution(100, 97, 	[
                                    [1,1,100,97]
                            ])); // [1]