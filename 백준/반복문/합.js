const input = require('fs').readFileSync('/Users/seonginch/Desktop/dashboard/practice_coding_test/백준/반복문/합.txt').toString();

const array = Array.from(new Array(Number(input)), (_ , i) => i + 1);

console.log(array.reduce((acc, cur) => acc + cur, 0));