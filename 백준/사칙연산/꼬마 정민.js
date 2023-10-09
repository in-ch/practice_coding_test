const fs = require('fs');
// const string = "77 77 7777";
const [num1, num2, num3]=fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
// const [num1, num2, num3]=string.toString().split(' ').map(Number);
console.log(num1 + num2 + num3);