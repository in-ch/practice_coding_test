// https://school.programmers.co.kr/learn/courses/30/lessons/42578
// Lv2 

function solution(clothes) {
    const len = clothes.length;
    let answer = 1;
    let obj = {};
    
    for(let i=0; i<len; i++){
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
    }
    for(let key in obj){
        answer *= obj[key];
    }
    
    return answer-1;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]));