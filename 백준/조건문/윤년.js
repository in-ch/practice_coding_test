// https://www.acmicpc.net/problem/2753
// const year = 2000;
const _year = require("fs").readFileSync('/dev/stdin').toString();
const year = Number(_year);

if((year % 4 === 0 && year % 100 !== 0) || year % 400 == 0) console.log("1");
else console.log("0");