function printEnter (nickname) {
    return `${nickname}님이 들어왔습니다.`;
}

function printLeave(nickname) {
    return `${nickname}님이 나갔습니다.`;
}

function solution(histories) {
    const uidObj = {};
    const answer = [];

    for (const history of histories) {
        const [action, uid, nickname]  = history.split(" ");
        if(uidObj[uid] === undefined) uidObj[uid] = {};
        if(action !== "Leave") uidObj[uid] = nickname;
    }

    debugger

    for (const history of histories) {
        const [action, uid, _]  = history.split(" ");
        if(action === "Enter") answer.push(printEnter(uidObj[uid]));
        if(action === "Leave") answer.push(printLeave(uidObj[uid]));
    }

    return answer;
}

console.log(solution([
                    "Enter uid1234 Muzi", 
                    "Enter uid4567 Prodo",
                    "Leave uid1234",
                    "Enter uid1234 Prodo",
                    "Change uid4567 Ryan"])); // ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]