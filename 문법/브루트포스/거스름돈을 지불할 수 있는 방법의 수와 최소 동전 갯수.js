// 10원과 50원을 가지고 120원을 지불할 수 있는 모든 방법의 수와 최소 동전의 갯수를 구해라 .

function solution() {
    let total = 120;
    let won10 = 10;
    let won50 = 50;
    let minTotal = 9999;
    let result = [];

    for(let i = 0; won10 * i <= total ; i++){
        for(let j = 0; won50 * j<= total ; j++){
            if(total === ((won10 * i) + (won50 * j))) result.push([i, j]);
        }
    }

    result.forEach((cur) => {
        if((cur[0] + cur[1]) < minTotal ) minTotal = cur[0] + cur[1];
    });

    return minTotal;
}

console.log(solution());