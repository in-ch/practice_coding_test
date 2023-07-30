// https://school.programmers.co.kr/learn/courses/30/lessons/12915

function 문자열정렬(strings, n) {
  return strings.sort((a, b) => {
    if([...a][n] < [...b][n]) return -1;
    if([...a][n] > [...b][n]) return 1;
    if([...a][n] === [...b][n]) {
      if(a < b) {
        return -1;
      } else {
        return 0;
      }
    };
  });
}

// chat GPT가 리펙토링해 준거 
// 배열의 문자열을 비교하는 부분을 localeCompare 메서드를 활용하여 간단하게 처리. 
// localeCompare 메서드는 문자열을 비교하고 정렬 순서를 반환
function 문자열정렬withGPT(strings, n) {
  return strings.sort((a, b) => {
    const charA = a[n];
    const charB = b[n];

    if (charA === charB) {
      return a.localeCompare(b);
    }

    return charA.localeCompare(charB);
  });
}
  
console.log(문자열정렬(["abce", "abcd", "cdx"]	, 2));
  