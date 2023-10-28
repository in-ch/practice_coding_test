// https://school.programmers.co.kr/learn/courses/30/lessons/42586
// Lv2

function solution(progresses, speeds) {
    var answer = [];
    // 첫번째 인자값들 일 때 : [7, 3, 9] ->  각 작업이 완료되기까지 필요한 날짜를 계산한 결과
    // 두번째 인자값들 일 때 : [5, 10, 1, 1, 20, 1]
    const developAccesses = progresses.map((progress,idx)=> Math.ceil((100 - progress) / speeds[idx]))

    // 첫번째 개발이 완료되는 데에 소요되는 시간
    let developedDay = developAccesses[0]; 
    let developedDayCount = 0
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


console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], 	[1, 1, 1, 1, 1, 1])); // [1, 3, 2]