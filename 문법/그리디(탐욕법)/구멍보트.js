// https://school.programmers.co.kr/learn/courses/30/lessons/42885
// Lv 2

// ㅇㅎ .. 
// 앞이랑 뒤랑 빼면서 합치는 거네.. 
function solution(people, limit) {
    const peoples = people.sort((a,b)=>b-a)
    let boatCount = 0
    peoples.forEach(people=>{
        if(!(people + peoples.at(-1) > limit)) peoples.pop();
        boatCount++
    })
    return boatCount
}

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3
