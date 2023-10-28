// https://school.programmers.co.kr/learn/courses/30/lessons/42586
// Lv2

function solution(progresses, speeds) {
    var answer = [];
    const developAccesses = progresses.map((progress,idx)=> Math.ceil((100 - progress) / speeds[idx]))

    let developedDay = developAccesses[0], developedDayCount = 0
    developAccesses.forEach(developAccess=>{
        if(developedDay >= developAccess){
            developedDayCount++
        }
        else{
            developedDay = developAccess
            answer.push(developedDayCount)
            developedDayCount = 1
        }
    })

    // 마지막 남은 배포 적용 
    if(developedDayCount){
        answer.push(developedDayCount)
    }

    return answer;
}


console.log(solution([93, 30, 55], [1, 30, 5]));
// console.log(solution([95, 90, 99, 99, 80, 99], 	[1, 1, 1, 1, 1, 1]));
// console.log(solution([93, 30, 55], [1, 30, 5]));