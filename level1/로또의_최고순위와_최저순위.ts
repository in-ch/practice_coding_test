// https://school.programmers.co.kr/learn/courses/30/lessons/77484

const rankObj = {
  6: "1",
  5: "2",
  4: "3",
  3: "4",
  2: "5",
  1: "6",
  0: "6",
};

function 로또의최고순위와최저순위(lottos, win_nums) {
  let lottoObj = {};
  let max = 0;
  let min = 0;

  for (let val of lottos) {
    lottoObj[val] = (lottoObj[val] || 0) + 1;
  }
  for (let val of win_nums) {
    if (!!lottoObj[val]) {
      min++;
    }
  }
  max = Number(min) + (isNaN(Number(lottoObj[0])) ? 0 : Number(lottoObj[0]));
  return [Number(rankObj[max]), Number(rankObj[min])];
}

console.log(
  로또의최고순위와최저순위([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])
);

console.log(
  로또의최고순위와최저순위([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])
);

console.log(
  로또의최고순위와최저순위([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])
);
