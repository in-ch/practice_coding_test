// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function 문자열과영단어(s) {
    const obj = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
      };

    for (const key in obj) {
        s = s.replaceAll(key, obj[key]);
      }

      return Number(s);
}
  
console.log(문자열과영단어("2three45sixseven"));
  