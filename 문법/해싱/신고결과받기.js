function solution(id_list, reports, k) {
    let reporterObj = {}; // 신고한 유저가 key 값 
    let reportedObj = {}; // 신고당한 유저가 key 값
    var answer = [];


    for(id of id_list) {
        reporterObj[id] = 0;
        reportedObj[id] = [];
    }

    for(report of reports) {
        const [reporter, reported] = report.split(" ");
        reportedObj[reported] = [...new Set([...reportedObj[reported], reporter])];
    }

    for(user in reportedObj) {
        if(reportedObj[user].length >= k) {
            reportedObj[user].forEach((reportedUser) => {
                reporterObj[reportedUser] = reporterObj[reportedUser] + 1;
            })
        }
    }
    
    id_list.forEach((reporter) => {
        answer.push(reporterObj[reporter]);
    })

    return answer;
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2)); // [2,1,1,0]
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)); // [0, 0]