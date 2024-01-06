// https://school.programmers.co.kr/learn/courses/30/lessons/17680
// Lv 2

function mySolution(cacheSize, cities) {
    const caches = Array.from({length: cacheSize}, () => null);
    cities = cities.map((city) => city.toLowerCase());
    let answer = 0;
    for(let city of cities) {
        if(caches.some((v) => v === city)) {
            answer += 1;
            caches.splice(caches.indexOf(city),1)
        }
        else answer += 5;
        caches.push(city);
        if(caches.length > cacheSize) caches.shift();
    }
    return answer;
}

function solution(cacheSize, cities) {
    const cache = []
    let executeTime = 0
    cities.forEach(city=>{
        const lowerCity = city.toLowerCase()
        if(cache.includes(lowerCity)){
            executeTime += 1
        }
        else{
            executeTime += 5
        }

        if(cacheSize>0){
            if(cache.includes(lowerCity)){
                cache.splice(cache.indexOf(lowerCity),1)
                cache.push(lowerCity)
            }
            else if(cache.length === cacheSize){
                cache.shift()
                cache.push(lowerCity)
            }
            else{
                cache.push(lowerCity)
            }
        }
    })

    return executeTime
}


console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"])); // 50
console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"])); // 21
console.log(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])); // 60
console.log(solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])); // 52
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"])); // 16
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"])); // 25
console.log(solution(5, ["a", "b", "c", "b", "a"])); // 17
