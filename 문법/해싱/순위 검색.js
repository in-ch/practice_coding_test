// https://school.programmers.co.kr/learn/courses/30/lessons/72412
// Lv 2

function mySolution(infos, querys) {
    const answers = [];

    function createObject(languages, positions, careers, foods) {
        const obj = {};

        for (const lang of languages) {
            obj[lang] = {};
            for (const position of positions) {
                obj[lang][position] = {};
                for (const career of careers) {
                    obj[lang][position][career] = {};
                    for (const food of foods) {
                        obj[lang][position][career][food] = { scores: [] };
                    }
                }
            }
        }

        return obj;
    }

    const languages = ["java", "cpp", "python", "-"];
    const positions = ["frontend", "backend", "-"];
    const careers = ["senior", "junior", "-"];
    const foods = ["pizza", "chicken", "-"];

    const obj = createObject(languages, positions, careers, foods);
    
    function dfs(keys, index) {
        if (index === keys.length - 1) {
            obj[keys[0]][keys[1]][keys[2]][keys[3]]["scores"].push(keys[4]);
            return;
        }
        const newKeys = [...keys];
        newKeys[index] = "-";
        dfs(newKeys, index + 1);
        dfs(keys, index + 1);
    }

    for (const info of infos) {
        const [lang, position, career, food, score] = info.split(" ");
        obj[lang][position][career][food]['scores'].push(Number(score));
        dfs([lang, position, career, food, Number(score)], 0);
    }

    for (const query of querys) {
        let answer = 0;
        const [lang, position, career, food, score] = query.replace(/and /g, "").split(" ");
        const targetScores = (lang === "-" && position === "-" && career === "-" && food === "-") ? obj[lang][position][career][food].scores : [...new Set(obj[lang][position][career][food].scores)];
        const targetScore = Number(score);
        for (const s of targetScores) {
            if (score === "-" || s >= targetScore) {
                answer++;
            }
        }

        answers.push(answer);
    }

    return answers;
}

function solution(infos, querys) {
    const rule = new Map();
    infos.forEach(v => {
        const info = v.split(' ');
        const score = Number(info.pop());

        let key = info.join(''); 
        rule.set(key, rule.has(key) ? [...rule.get(key), score] : [score]);
    });

    /// 이진 탐색을 하기 위해 정렬을 한다.
    for(let [key, value] of rule){
        rule.set(key, value.sort((a, b) => a - b));
    }
    
    return querys.map(e => {
        const conditions = e.split(/ and | |-/i).filter(e => e);
        return search(rule, conditions);
    });
}

const search = (rule, conditions) => {
    const score = conditions.pop();

    
    var a = Array.from(rule.keys())
    .filter(key => conditions.every(v => key.includes(v)));

    debugger;
    return Array.from(rule.keys())
        .filter(key => conditions.every(v => key.includes(v)))
        .reduce((a, c) => a + rule.get(c).slice(lowerBound(rule.get(c), score)).length, 0);
}

const lowerBound = (arr, target) => {
    let left = 0;
    let right = arr.length; 
    while(left < right){
        const mid = Math.floor((left + right) / 2);

        if(arr[mid] >= target) right = mid;
        else left = mid + 1;
    }

    return left;
}
    
console.log(solution(
    [
        "java backend junior pizza 150",
        "python frontend senior chicken 210",
        "python frontend senior chicken 150",
        "cpp backend senior pizza 260",
        "java backend junior chicken 80",
        "python backend senior chicken 50"
    ], 
    [
            "java and backend and junior and pizza 100",
            "python and frontend and senior and chicken 200",
            "cpp and - and senior and pizza 250",
            "- and backend and senior and - 150",
            "- and - and - and chicken 100",
            "- and - and - and - 150"
    ]
)); // [1,1,1,1,2,4]