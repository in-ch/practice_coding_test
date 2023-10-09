// const fs = require('fs');
// let [num1, num2]=fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

// if(num1 > 0 && num2 > 0) console.log(1);
// else if(num1 < 0 && num2 > 0) console.log(2);
// else if(num1 < 0 && num2 < 0) console.log(3);
// else if(num1 > 0 && num2 < 0) console.log(4);

const readline = require('readline');
let rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
let input = [];

rl.on('line', function (line) {
    input.push(line)
  })
    .on('close', function () {
        let a = parseInt(input[0]);
        let b = parseInt(input[1]);

        if(0 < a && 0 < b){
            console.log('1');
        }else if(a < 0 && 0 < b){
            console.log('2');
        }else if(a < 0 && b < 0){
            console.log('3');
        }else if(0 < a && b < 0){
            console.log('4');
        };
    process.exit();
  });