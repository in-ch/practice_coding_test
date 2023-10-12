let inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n');

inputs.forEach((input)=> {
    let [num1, num2] = input.split(' ').map(Number);
    if(num2 !== undefined) console.log(num1 + num2);
});