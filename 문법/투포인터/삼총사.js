// https://school.programmers.co.kr/learn/courses/30/lessons/131705

function solution(number) {
    let count = 0;
    let first_pointer = 0;
    let second_pointer = 1;
    let third_pointer = 2;
  
    while (first_pointer < number.length - 1) {
      number[first_pointer] + number[second_pointer] + number[third_pointer] ===
        0 && count++;
      if (third_pointer < number.length) {
        third_pointer++;
      } else if (second_pointer < number.length - 1) {
        second_pointer++;
        third_pointer = second_pointer + 1;
      } else {
        first_pointer++;
        second_pointer = first_pointer + 1;
        third_pointer = second_pointer + 1;
      }
    }
    return count;
}