function 명예의전당(k, scores) {
  let honors = [];
  let results = [];
  scores.map((score) => {
    honors.push(score);
    honors = honors.sort((a, b) => b - a).splice(0, k);
    results.push(honors.at(-1));
  });
  return results;
}

// gpt 한테 리펙토링 받은 거 
// function 명예의전당(k, scores) {
//   const results = [];
//   for (let i = 0; i < scores.length; i++) {
//     const honors = scores.slice(0, i + 1).sort((a, b) => b - a).slice(0, k);
//     results.push(honors[honors.length - 1]);
//   }
//   return results;
// }
// 1. map 메서드 대신 for 루프를 사용하여 반복문을 구현합니다.
// 2. sort와 splice를 연달아 사용하지 않고 slice 메서드를 사용하여 불필요한 배열 조작을 피합니다.
// 3. 결과를 results 배열에 바로 추가하여 불필요한 honors 배열을 추가로 관리하지 않습니다.
// 4. 사용하지 않는 honors 배열을 제거하여 메모리를 절약합니다.

// 명예의전당(3, [10, 100, 20, 150, 1, 100, 200]);
명예의전당(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]);
