// https://school.programmers.co.kr/learn/courses/30/lessons/42842
// Lv2

function mySolution(brown, yellow) {
    let answer = [];
    let filteredAnswer = [];
    let totalTile = brown + yellow;
    let realAnswer = [];


    for(let i = 1; i < Math.ceil(totalTile / 2); i++) {
        if(totalTile % i === 0) {
            answer.push(i);
            answer.push(totalTile / i);
        }
    }
    answer = answer.splice(answer.length / 2, answer.length);
    for(let j =0; j < answer.length; j +=2) {
        if(!(answer[j] < answer[j + 1])) filteredAnswer.push(answer[j],answer[j + 1]);
    }
    for(let k =0; k < answer.length; k +=2) {
        if(filteredAnswer[k] < (brown / 2)) {
            realAnswer.push(filteredAnswer[k]);
            realAnswer.push(filteredAnswer[k + 1]);
            break;
        }
    }
    return realAnswer;
}

// 1. 먼저, 노란색 격자의 수를 기반으로 가능한 카펫의 가로와 세로 크기를 찾아야 한다.
// 2. 노란색 격자의 수를 이용하여 가능한 가로와 세로 길이의 조합을 모두 찾고, 각 조합마다 갈색 격자의 수를 계산해야 한다.
// 3. 주어진 갈색 격자의 수와 일치하는 조합을 찾으면 답이 된다. 
function solution(brown, yellow) {
    for (let width = 1; width <= yellow; width++) {
        if (yellow % width === 0) {
            const height = yellow / width;
            const totalBrown = (width + 2) * (height + 2) - yellow;
            
            if (totalBrown === brown) {
                return [width + 2, height + 2].sort((a, b) => b - a );
            }
        }
    }
    return [];
}


console.log(solution(10, 2)); // [4, 3]
console.log(solution(8, 1)); // [3, 3]
console.log(solution(24, 24)); // [8, 6]
