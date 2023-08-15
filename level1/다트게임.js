// https://school.programmers.co.kr/learn/courses/30/lessons/17682

function 스타상(results) {
  if(results < 3) {
    return results.map((v) => v * 2);
  }
  return [...results.slice(0, -2), results[results.length -2] * 2,results.pop() * 2];
}
function 아차상(results) {
  return [...results.slice(0, -1), results.pop() * -1];
}

function 배열만들기(array) {
  let result = [];
  let temp = "";
  for (let i = 0; i < array.length; i++) {
    let char = array[i];
    if (char === "S" || char === "D" || char === "T") {
      result.push(temp);
      result.push(char);
      temp = "";
    } else if (char === "*" || char === "#") {
      result.push(temp);
      result.push(char);
      temp = "";
    } else {
      temp += char;
    }
  }
  result.push(temp);
  return result.filter(v => v != '');
}


function 다트게임(dartResult) {
  let convertedResults = [];
  let tempVar = null;
  배열만들기(dartResult).map((dartScore) => {
    if(dartScore === "*") {
      convertedResults = 스타상(convertedResults);
    } else if(dartScore === "#") {
      convertedResults = 아차상(convertedResults);
    } else if(!tempVar) {
      tempVar = Number(dartScore);
    } else if(dartScore === "S") {
      convertedResults.push(Math.pow(tempVar, 1));
      tempVar = null;
    } else if(dartScore === "D") {
      convertedResults.push(Math.pow(tempVar, 2));
      tempVar = null;
    } else if(dartScore === "T") {
      convertedResults.push(Math.pow(tempVar, 3));
      tempVar = null;
    } else {
      throw Error("오류 발생")
    }
  });
  return convertedResults.reduce((acc, cur) => {
    return acc + cur;
  },0)
}

// console.log(다트게임("1S2D*3T"));
// console.log(다트게임("1D2S#10S"));
// console.log(다트게임("1D2S0T"));
// console.log(다트게임("1S*2T*3S"));
// console.log(다트게임("10S1S0S*"));
console.log(다트게임("1S2D3T"));
console.log(다트게임("1S2D#3T"));
console.log(다트게임("1S2D3T*"));



// chat GPT 가 리펙토링해준거 

// function applyStar(results) {
//   if (results.length < 3) {
//     return results.map((value) => value * 2);
//   }
  
//   const last = results.pop();
//   return [...results, results.pop() * 2, last * 2];
// }

// function applyAcha(results) {
//   const last = results.pop();
//   return [...results, last * -1];
// }

// function parseScores(input) {
//   const result = [];
//   let current = "";

//   for (const char of input) {
//     if (/[\d]/.test(char)) {
//       current += char;
//     } else if (/[SDT]/.test(char)) {
//       result.push(Number(current), char);
//       current = "";
//     } else if (/[#*]/.test(char)) {
//       result.push(Number(current), char);
//       current = "";
//     }
//   }
//   result.push(Number(current));
  
//   return result.filter(value => value !== "");
// }

// function calculateDartGameScore(dartResult) {
//   const parsedResults = parseScores(dartResult);
//   let totalScore = 0;
//   let currentScore = null;

//   parsedResults.forEach((dartScore) => {
//     if (dartScore === "*") {
//       currentScore = applyStar(currentScore);
//     } else if (dartScore === "#") {
//       currentScore = applyAcha(currentScore);
//     } else if (Number.isInteger(dartScore)) {
//       currentScore = currentScore ? [...currentScore, dartScore] : [dartScore];
//     } else if (/[SDT]/.test(dartScore)) {
//       const exponent = dartScore === "S" ? 1 : dartScore === "D" ? 2 : 3;
//       currentScore[currentScore.length - 1] = Math.pow(currentScore[currentScore.length - 1], exponent);
//     } else {
//       throw new Error("오류 발생");
//     }
//   });

//   totalScore = currentScore.reduce((acc, cur) => acc + cur, 0);
//   return totalScore;
// }