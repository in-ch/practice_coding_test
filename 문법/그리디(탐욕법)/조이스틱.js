// https://school.programmers.co.kr/learn/courses/30/lessons/42860
// Lv2


// 씨발 뭐지? 내가 문제를 잘못 이해했나?
function _solution(name) {
    let answer = 0;
    const names = [...name];

    let current = "A";
    const alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    function move(_current, _target) {
        const currentIndex = alphabetArray.indexOf(_current);
        const targetIndex = alphabetArray.indexOf(_target);
        const distance = Math.abs(targetIndex - currentIndex);
        const leftCursor = targetIndex; 
        const rightCursor = currentIndex + 2;
        answer += Math.min(distance, leftCursor, rightCursor);
    }

    names.forEach((_name) => {
        move(current, _name);
        current = _name;
    });

    return answer;
}

function solution(name) {
    if (new Set(name.split('')).size === 1 && name.includes('A')) {
        return 0;
    }

    let answer = Number.POSITIVE_INFINITY;

    for (let i = 0; i < Math.floor(name.length / 2); i++) {
        const leftMoved = name.slice(-i) + name.slice(0, -i);
        const rightMoved = name.slice(i) + name.slice(0, i).split('').reverse().join('');

        for (let n of [leftMoved, rightMoved[0] + rightMoved.slice(1).split('').reverse().join('')]) {
            while (n && n.slice(-1) === 'A') {
                n = n.slice(0, -1);
            }

            const rowMove = i + n.length - 1;
            let colMove = 0;

            for (const c of n) {
                colMove += Math.min(c.charCodeAt(0) - 65, 91 - c.charCodeAt(0));
            }

            answer = Math.min(answer, rowMove + colMove);
        }
    }

    return answer;
}

console.log(solution("JEROEN")); // 56
console.log(solution("BBBBAAAABA")); // 12
// console.log(solution("JAN")); //23
