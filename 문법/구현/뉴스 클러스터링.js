// https://school.programmers.co.kr/learn/courses/30/lessons/17677
// Lv 2

function subStr(str) {
    const arr = [];
    const strs = [...str];
    for(let i = 0; i < str.length - 1; i++) {
        var ss = `${strs[i]}${strs[i+1]}`;
        if (ss.match(/[A-Za-z]{2}/)) {
            arr.push(ss);
        }
    }
    return arr;
}

function solution(str1, str2) {
    const _str1 = str1.toUpperCase();
    const _str2 = str2.toUpperCase();
    const arr1 = subStr(_str1);
    const arr2 = subStr(_str2);

    const set = new Set([...arr1, ...arr2]);
    let u = 0;
    let n = 0;

    set.forEach(item => {
        const has1 = arr1.filter(x => x === item).length;
        const has2 = arr2.filter(x => x === item).length;
        debugger;
        u += Math.max(has1, has2);
        n += Math.min(has1, has2);
        debugger;
      })
    const JA_CARD = Math.floor(n / u * 65536);

    return u === 0 ? 65536 : JA_CARD;
}

console.log(solution("FRANCE", "french")); // 16384
console.log(solution("handshake", "shake hands")); // 65536
console.log(solution("aa1+aa2", "AAAA12")); // 43690
console.log(solution("E=M*C^2", "e=m*c^2")); // 65536
