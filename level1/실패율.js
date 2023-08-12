// https://school.programmers.co.kr/learn/courses/30/lessons/42889

const solution = (N, stages) => {
  /**
   * @params stage: number => 도달한 플레이어의 수를 구하려는 스테이지
   * @description 해당 스테이지를 클리어했거나 클리어하고 있는 플레이어의 수를 구한다. 
  */
  function countClearedOrInProgressPlayers(stage) {
    return stages.filter(v => v >= stage).length;
  }

  let results = new Array(N).fill().map((_, index) => index + 1);

  let failureRateObj = stages.reduce((obj, num) => {
    if (obj[num] === undefined) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
    return obj;
  }, {});

  for (const key in failureRateObj) {
    failureRateObj[key] = failureRateObj[key] / countClearedOrInProgressPlayers(key);
  }

  results.sort((a, b) => {
      const _a = failureRateObj[b] || 0;
      const _b = failureRateObj[a] || 0;
      return _a - _b;
  });

  return results;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4,4,4,4,4]));
