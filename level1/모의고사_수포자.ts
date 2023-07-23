// https://school.programmers.co.kr/learn/courses/30/lessons/42840

const student1_pattern = [1, 2, 3, 4, 5];
const student2_pattern = [2, 1, 2, 3, 2, 4, 2, 5];
const student3_pattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

function 모의고사(answers) {
  let student1_count = 0;
  let student2_count = 0;
  let student3_count = 0;

  answers.map((answer, index) => {
    answer === student1_pattern[index % student1_pattern.length] &&
      student1_count++;
    answer === student2_pattern[index % student2_pattern.length] &&
      student2_count++;
    answer === student3_pattern[index % student3_pattern.length] &&
      student3_count++;
  });

  // 나는 마지막에 이렇게 푸니깐 틀렸다.
  // let result = [];
  // student1_count > 0 && result.push(1);
  // student2_count > 0 && result.push(2);
  // student3_count > 0 && result.push(3);

  // return result.sort((a, b) => a - b);

  // 왜 이렇게 해야 되냐면
  // maxCount는 세 수포자 중에서 가장 많은 문제를 맞힌 문제의 개수를 나타내는 변수
  // 각 수포자(student1, student2, student3)는 주어진 정답 배열 answers와 자신의 정답 패턴을 비교하여 맞힌 문제의 개수를 센다.
  // maxCount 변수를 사용하여 세 수포자 중에서 가장 많은 문제를 맞힌 개수를 구하고, 이를 바탕으로 가장 많은 문제를 맞힌 사람을 찾는다.
  // 이렇게 구한 가장 많은 문제를 맞힌 개수와 동일한 개수의 문제를 맞힌 수포자들을 결과 배열 result에 추가하여 반환한다.
  const maxCount = Math.max(student1_count, student2_count, student3_count);
  const result: any = [];

  if (student1_count === maxCount) result.push(1);
  if (student2_count === maxCount) result.push(2);
  if (student3_count === maxCount) result.push(3);

  return result;
}

console.log(모의고사([1, 3, 2, 4, 2]));
