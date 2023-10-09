// https://www.acmicpc.net/problem/1330

// const num1 = 5;
// const num2 = 5; 

const fs = require('fs');
const [num1, num2]=fs.readFileSync('/dev/stdin').toString().split(" ").map(Number);

console.log(num1 < num2 ? "<" : num1 > num2 ? ">" : "==" );