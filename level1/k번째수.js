// https://school.programmers.co.kr/learn/courses/30/lessons/42748

/// 여기서 sort()를 그냥 통으로 쓰니깐 케이스가 하나 틀렸다. 다음 부터 무조건 compareFunction을 쓰도록 하자. 
/// chat gpt도 맞다고 했는데,,, 음.. 그냥 compareFunction 넣는 것을 습관들리면 될 것 같다. 

function k번째수(array, commands) {
  let results = [];
  let arr = [...array];

  commands.map((command) => {
    let value = arr
      .slice(command[0] - 1, command[1])
      .sort((a, b) => a - b)
      [command[2] - 1];
    results.push(value);
  });

  return results;
}

console.log(k번째수(
  [1, 5, 2, 60, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
));
