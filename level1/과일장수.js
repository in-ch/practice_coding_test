/// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function chunkScore (array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize).sort((a, b) => a - b));
    }
    return result.filter(v => v.length === chunkSize);
}

function solution(k, m, score) {
    let price = 0;
    const sortedScores = score.sort((a,b) => b - a).filter((v) => v < k + 1);

    const chunkedScore = chunkScore(sortedScores, m);
    chunkedScore.map((_score) => {
        price += _score[0] * _score.length;
    });
    return price;
}

solution(3, 4, [1, 2, 3, 1, 2, 3, 1]);
solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
