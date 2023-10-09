// https://www.acmicpc.net/problem/2480
// const data = [3,3,6];
// const data = [2,2,2];
// const data = [6,2,5];

const data = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ")
    .map((value) => +value);

data.sort(function (a, b) {
    return b - a;
});
let countObj = {};

data.forEach((dice) => {
    countObj[dice] = (countObj[dice] || 0) +1;
});

var arr = [];
for (var key in countObj) {
  if (countObj.hasOwnProperty(key)) {
    arr.push({ key: key, value: countObj[key] });
  }
}

arr.sort(function(a, b) {
  return b.value - a.value;
});

if(arr[0].value === 3) console.log(10000 + (arr[0].key * 1000));
else if(arr[0].value === 2) console.log(1000 + (arr[0].key * 100));
else console.log(data[0] * 100);

