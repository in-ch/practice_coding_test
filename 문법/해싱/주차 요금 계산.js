// https://school.programmers.co.kr/learn/courses/30/lessons/92341
// Lv2 

function solution(fees, records) {
    const answer = [];
    const [defaultTime, defaultFee, unitTime, unitFee] = fees;
    const obj = {};
    let cars = [];
    function cacluluateFee(diff) {
        var diff = Math.max(diff - defaultTime, 0);
        return defaultFee + (Math.ceil(diff / unitTime) * unitFee);
    }
    function calculateTime(start, end) {
        const [_startHour, _startMin] = start.split(":").map(Number); 
        const [_endHour, _endMin] = end.split(":").map(Number);
        var diff = ((_endHour * 60 + _endMin) - (_startHour * 60 + _startMin));
        return diff < 0 ? 0 : diff;
    }

    for(let data of records) {
        const [time, carNum, inOut] = data.split(" ");
        cars.push(carNum);

        if(obj[carNum] === undefined)  obj[carNum] = []
        obj[carNum][inOut] = obj[carNum][inOut] !== undefined ? [...obj[carNum][inOut], time] : [time];
    }

    for(let data in obj) {
        let time = 0;
        for(let i = 0; i < obj[data]["IN"].length; i++) {
            time += calculateTime(obj[data]["IN"][i],( obj[data]["OUT"] !== undefined ? obj[data]["OUT"][i] || "23:59": "23:59"));
        } 
        obj[data] = cacluluateFee(time);
    }

    cars = [...new Set(cars)].sort((a, b) => a - b);

    for(let i = 0; i < cars.length; i++) {
        answer.push(obj[cars[i]]);
    }
    return answer;
}

console.log(solution(
    [180, 5000, 10, 600],
    ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]
)); // [14600, 34400, 5000]

console.log(solution(
    [120, 0, 60, 591],  
    ["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"]
)); // [0, 591]

console.log(solution(
    [1, 461, 1, 10], 
    ["00:00 1234 IN"]
)); // [14841]