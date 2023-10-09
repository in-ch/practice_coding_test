// const startH = 14;
// const startM = 30;
// const duration = 20;

// const startH = 23;
// const startM = 48;
// const duration = 25;

const fs = require('fs');
const data = fs.readFileSync('dev/stdin').toString().split('\n');
const start = data[0].split(' ').map(i => +i);
const startH = start[0];
const startM = start[1];
const duration = data[1];


let currentDate = new Date(`2023-07-07 ${startH}:${startM}:00`);
currentDate.setMinutes(currentDate.getMinutes() + duration);
console.log(`${currentDate.getHours()} ${currentDate.getMinutes()}`);