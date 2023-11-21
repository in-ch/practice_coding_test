// Lv3 
// https://school.programmers.co.kr/learn/courses/30/lessons/43163


// "가장 짧은 변환 과정을 찾아야 한다"는 최단 경로 문제의 특성을 가지고 있기 때문에 DFS가 아니라 BFS로 문제를 푼다. 
function canTransform(word1, word2) {
    let diffCount = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) {
        diffCount++;
        if (diffCount > 1) {
          return false; // 한 번에 한 개의 알파벳만 바꿀 수 있으므로 2개 이상의 다른 문자가 있으면 변환 불가능
        }
      }
    }
    return diffCount === 1;
}

function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0; // target이 words 안에 없으면 변환 불가능
    }

    const visited = new Set();
    const queue = [[begin, 0]]; // 큐에는 단어와 현재까지의 변환 단계 수를 저장

    while (queue.length > 0) {
        const [currentWord, steps] = queue.shift();

        if (currentWord === target) {
            return steps; // target에 도달했을 때의 변환 단계 수 반환
        }

        for (const word of words) {
            if (!visited.has(word) && canTransform(currentWord, word)) {
                visited.add(word);
                queue.push([word, steps + 1]);
            }
        }
    }

    return 0; // 변환할 수 없는 경우
}
  
  // 예제 테스트
  console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 4
  console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0
