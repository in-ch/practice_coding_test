// https://www.acmicpc.net/problem/2588

const fs = require('fs');
let [num1, num2]=fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);
let _num2 = String(num2).split("");
const oneNum= Number([..._num2].at(-1));
const tenNum=Number([..._num2].at(-2));
const hundredNum=Number([..._num2].at(-3));

console.log(num1 * oneNum);
console.log(num1 * tenNum);
console.log(num1 * hundredNum);
console.log(num1 * num2);