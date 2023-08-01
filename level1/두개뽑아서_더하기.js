// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function 두개뽑아서_더하기(numbers) {
  let first_pointer = 0;
  let second_pointer = 1;
  let results = [];

  while(first_pointer < numbers.length - 1) {
    let a = numbers[first_pointer] + numbers[second_pointer];
    results.push(a);
    if(second_pointer < numbers.length - 1) {
      second_pointer++;
    } else {
      first_pointer++;
      second_pointer = first_pointer + 1;
    }
  }
  return [...new Set(results.sort((a,b) => a - b))];
}

console.log(두개뽑아서_더하기(
  [2,1,3,4,1]
));
console.log(두개뽑아서_더하기(
  [5,0,2,7]
));
