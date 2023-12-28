// https://school.programmers.co.kr/learn/courses/30/lessons/92335
// Lv 2 

function isPrime(num) {
    if(num < 2) return false;
    if(num === 2) return true;
    if(num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num) + 1; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function makeJinsu (n, k) {
    const a = [];
    while(n > k - 1) {
        a.unshift(Math.floor(n % k));
        n = Math.floor(n / k);
    }
    a.unshift(n);

    return a;
}
function solution(n, k) {
    var answer = 0;
    let jinsu = makeJinsu(n, k);
    let array = [];
    let stack = [];
    for(let i = 0 ; i < jinsu.length; i++) {
        const shot = [];
        let back = 1;
        if(jinsu[i] === 0) {
            while(jinsu[i - back] !== 0 && i >= back) {
                shot.unshift(jinsu[i - back] );
                back++;
            }
            array.push(shot.join(""));
            stack = [];
        } 
        stack.push(jinsu[i]);
    }
    array.push(stack.join(""));
    array = array.map(Number);

    for(num of array) {
        if(isPrime(num)) answer++;
    }
    return answer;
}

console.log(solution(437674, 3));  // 3
console.log(solution(110011, 10)); // 2
