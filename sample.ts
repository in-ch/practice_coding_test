function 솔루션() {
  let a = { name: "kim" };
  let b = a;

  a.name = "lee";

  console.log(a);
  console.log(a === b);
}

솔루션();

/**
 * @description 5 1 2 이런 식으로 입력을 받을 때
 */
// const input = require("fs").readFileSync("/dev/stdin").toString().split(' ');
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);

/**
 * @description 472
 *              385 이런 식으로 입력을 받을 때 -> 근데 만약 string을 입력받아야 한다면 .map(Number);는 빼자. 혹은 .map(String);으로 바꾸어 주자.
 */
// const [num1, num2]=require("fs").readFileSync('/dev/stdin').toString().split('\n').map(Number);
