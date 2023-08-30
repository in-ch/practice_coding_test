
// https://school.programmers.co.kr/learn/courses/30/lessons/131128
function 숫자짝꿍(X, Y) {
  const results = [];
  const xArray = [...X];
  let copiedY = Y;
  xArray.forEach((_x) => {
    if(copiedY.replaceAll(_x, "") !== copiedY) {
      results.push(_x);
      copiedY = copiedY.replace(_x, "");
    }
  });
  
  return results.length < 1 ? "-1" : Number(results.sort((a ,b) => b - a).join("")).toString();
}

function 숫자짝꿍(X, Y) {
    let answer = '';
    const arrX = X.split('')
    const arrY = Y.split('')
    const yObj = {}

    arrX.sort((a,b)=>b-a)

    arrY.forEach((y)=>{
        if(yObj[y] === undefined)
            yObj[y] = 1
        else
            yObj[y]++
    })

    arrX.forEach(x=>{
        if(yObj[x] !== undefined && yObj[x] !== 0){
            yObj[x]--
            answer = answer.concat(x)
        }
    })

    if(answer.length === 0)
        return "-1"
    if(answer[0] === "0")
        return "0"
    return answer
}

console.log(숫자짝꿍("100", "2345"));
console.log(숫자짝꿍("100", "203045"));
console.log(숫자짝꿍("100", "123450"));
console.log(숫자짝꿍("12321", "42531"));
console.log(숫자짝꿍("5525", "1255"));
