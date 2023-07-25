// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function generateAlphabet(startChar, endChar) {
  let alphabet = [];
  for (let i = startChar.charCodeAt(0); i <= endChar.charCodeAt(0); i++) {
    alphabet.push(String.fromCharCode(i));
  }
  return alphabet;
}

function 시저암호(s, n) {
  let result = [];
  let uppercaseAlphabet = generateAlphabet('A', 'Z');
  let lowercaseAlphabet = generateAlphabet('a', 'z');

  for (let char of s) {
    if (char === " ") {
      result.push(" ");
    } else {
      if (char === char.toUpperCase()) {
        let index = uppercaseAlphabet.indexOf(char);
        let shiftedIndex = (index + n) % 26;
        result.push(uppercaseAlphabet[shiftedIndex]);
      } else {
        let index = lowercaseAlphabet.indexOf(char);
        let shiftedIndex = (index + n) % 26;
        result.push(lowercaseAlphabet[shiftedIndex]);
      }
    }
  }
  return result.join("");
}


console.log(시저암호("a B z", 4));
