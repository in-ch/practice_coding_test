function solution(n) {
    let total = 0;

    for(let i = 1; i <= 10; i++) {
        if(n % i == 0) total = total + i;
    }

    return total;
}

console.log(solution(10));