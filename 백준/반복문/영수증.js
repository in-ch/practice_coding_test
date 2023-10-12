const receipt = require('fs').readFileSync('/Users/seonginch/Desktop/dashboard/practice_coding_test/백준/반복문/영수증.txt').toString().split('\n');

const x = Number(receipt[0]);
const sliceReceipt = [...receipt].slice(2, receipt.length);

const total = sliceReceipt.reduce((acc, cur) => {
    const [num1, num2] = cur.split(" ");
    return acc + (parseInt(num1) * parseInt(num2));
},0);

console.log(x === total ? 'Yes' : 'No');