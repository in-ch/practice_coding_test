// https://school.programmers.co.kr/learn/courses/30/lessons/118666

// 1번 지표	라이언형(R), 튜브형(T)
// 2번 지표	콘형(C), 프로도형(F)
// 3번 지표	제이지형(J), 무지형(M)
// 4번 지표	어피치형(A), 네오형(N)

// 1	매우 비동의
// 2	비동의
// 3	약간 비동의
// 4	모르겠음
// 5	약간 동의
// 6	동의
// 7	매우 동의

function comparisonAndReturn(_resultObj, A, B) {
    var _a = isNaN(_resultObj[A]) ? 0 : _resultObj[A];
    var _b = isNaN(_resultObj[B]) ? 0 : _resultObj[B];
    return `${_a === _b ? A : _a  > _b ? A : B}`;
}


function calcuatorA (char1, char2, score) {
    if(score === 4) return [];
    return [score > 4 ? char2 : char1, score];
}

function 성격유형검사하기(surveys, choices) {
    let splitedSurvey = [];
    let resultObj = {};
    const scoreObj = {
        1: 3,
        2: 2,
        3: 1,
        4: 0,
        5: 1,
        6: 2,
        7: 3,
    };
    surveys.forEach((survey, index) => {
        splitedSurvey = [...survey];
        const cal = calcuatorA(splitedSurvey[0], splitedSurvey[1], choices[index]);
        resultObj[cal[0]]  = (resultObj[cal[0]] || 0) + scoreObj[cal[1]];
    })
    return `${comparisonAndReturn(resultObj, "R","T")}${comparisonAndReturn(resultObj, "C","F")}${comparisonAndReturn(resultObj, "J","M")}${comparisonAndReturn(resultObj, "A","N")}`;
}

console.log(성격유형검사하기(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(성격유형검사하기(["TR", "RT", "TR"], [7, 1, 3]));
  