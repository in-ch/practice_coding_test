// const num1 = 10;
// const num2 = 10;
const fs = require('fs');
const [num1, num2]=fs.readFileSync('/dev/stdin').toString().split(" ").map(Number);


let currentDate = new Date(`2023-07-07 ${num1}:${num2}:00`);
currentDate.setMinutes(currentDate.getMinutes() - 45);
console.log(`${currentDate.getHours()} ${currentDate.getMinutes()}`);