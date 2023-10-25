// https://school.programmers.co.kr/learn/courses/30/lessons/42586
// Lv2

// 내가 적은 코드
// function solution(progresses, speeds) {
//     var answer = [];
//     var _progresses = [...progresses];

//     while(_progresses.length > 0) {
//         _progresses.forEach((_, i) => {
//             _progresses[i] = _progresses[i] + speeds[i];
//         });
//         let doneCount = 0;
//         for(let i=0; i < _progresses.length; i++){
//             if(_progresses[i]> 99) {
//                 doneCount++;
//             } else break;
//         }
//         if(doneCount > 0) {
//             answer.push(doneCount);
//             for(let i = 0; i < doneCount; i++) _progresses.shift();
//         } 
//     }
//     return answer;
// }

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