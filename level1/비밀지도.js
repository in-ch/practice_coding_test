// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function decimalToBinary(decimalNumber, n) {
  let binary = "";
  while (decimalNumber > 0) {
    binary = (decimalNumber % 2) + binary;
    decimalNumber = Math.floor(decimalNumber / 2);
  }
  while (binary.length < n) {
    binary = "0" + binary;
  }
  /// 요거 마지막에 배열로 안 바꾸고 .push로 값을 넣고 그대로 리턴했는데 테스트 케이스 하나 통과 못 했었다. 사실 이유는 모르겠다.. 
  return [...binary];
}

function 비밀지도(n, arr1, arr2) {
  const results = [];

  for (let i = 0; i < n; i++) {
    let binaryArr1 = decimalToBinary(arr1[i], n);
    let binaryArr2 = decimalToBinary(arr2[i], n);
    let result = [];

    binaryArr1.map((_, index) => {
      if (binaryArr1[index] === "0" && binaryArr2[index] === "0") {
        result.push(" ");
      } else {
        result.push("#");
      }
    });
    results.push(result.join(""));
  }
  return results;
}

console.log(비밀지도(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
