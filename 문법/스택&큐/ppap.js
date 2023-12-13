// https://www.acmicpc.net/problem/16120

function solution(string) {
    let str = [...string];
    let stack = [];

    while(str.length > 0) {
        stack.push(str.shift());
        const check = stack.slice(-4).join("");
        if(check === "PPAP") {
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            stack.push("P");
        }
    }
    const join = stack.join("")
    return (join === 'P' || join === "PPAP") ? 'PPAP' : 'NP'
}

console.log(solution("PPPAPAP")); // PPAP 
console.log(solution("PPAPAPP")); // NP