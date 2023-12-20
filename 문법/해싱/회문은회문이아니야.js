// https://www.acmicpc.net/problem/15927

function same(str) {
    const strs = [...str];
    let check = false;

    while(strs.length > 0) {
        const start = strs.shift();
        const end = strs.pop();
        if(start === end || end === undefined) {
            check = true;
        } else check = false;
    }
    return check;
}
function allSame(str) {
    const strs = [...str];
    const start = strs.shift();

    for(let i =0; i < strs.length; i++){
        if(start !== strs[i]) return false;  
    }    
    return true;
}

function solution(str) {
    if(same(str)) {
        if(allSame(str)) {
            return -1;
        } 
        return str.length - 1
    }
    return str.length
};

console.log(solution("ABCBA")); // 4
console.log(solution("PALINDROME")); // 10
console.log(solution("ZZZ")); // -1
