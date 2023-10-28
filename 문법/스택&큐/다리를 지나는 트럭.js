function solution(bridge_length, weight, truck_weights) {
    let passingTrucks = [];
    let answer = 0;

    while(!(truck_weights.length === 0)) {
        answer++;

        // 경과 시간에 따라서 다리를 건너는 트럭에서 뺴줍니다. 
        passingTrucks = [...passingTrucks].filter((v) => v.location !== 0);

        // 추가적으로 다리를 지날 수 있습니다.
        const passingTrucksTotalWeight = passingTrucks.reduce((acc, cur) =>  cur.truck + acc,0);
        if(!(passingTrucksTotalWeight + truck_weights[0] > weight)) {
            const cursortruck = truck_weights.shift();
            passingTrucks.push({
                truck:cursortruck,
                location: bridge_length,
            });
        }

        // 시간이 지났으니깐 길이를 하나씩 증가시킵니다.
        passingTrucks = passingTrucks.map((passingTruck) => {
            return {
                truck: passingTruck.truck,
                location: passingTruck.location - 1,
            }
        })
    }

    return answer + bridge_length;
}
console.log(solution(2, 10, [7,4,5,6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10])); // 110
