// https://school.programmers.co.kr/learn/courses/30/lessons/42747
// Lv 2

function solution(citations) {
    var answer = 0;

    citations = citations.sort((a,b) => b-a);

    let arr = [];

    for(let i=0; i<citations.length; i++){
        arr.push(citations[i]);
        if(citations[i]<arr.length){
            break;
        }
        answer++;
    }


    return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
console.log(solution([9,9,9,9,1]));
