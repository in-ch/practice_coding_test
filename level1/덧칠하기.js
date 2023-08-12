// https://school.programmers.co.kr/learn/courses/30/lessons/161989

function solution(n, m, section) {
  let tried = 0
  let maxRange = -Infinity
  section.forEach(range=>{
      if(maxRange < range){
          tried++
          maxRange = range+m-1
      }
  })
  return tried
}

console.log(solution(8, 4, [2, 3, 6])); // Output: 2
console.log(solution(5, 4, [1, 3]));    // Output: 1
console.log(solution(4, 1, [1, 2, 3, 4])); // Output: 4