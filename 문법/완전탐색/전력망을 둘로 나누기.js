// https://school.programmers.co.kr/learn/courses/30/lessons/86971
// Lv 2

// 접근 방식부터가 잘못됐었음. 
// 그냥 DFS나 Union Find, 트리 방식으로 하나씩 끊어보는 게 답이였음.. 
function _solution(n, wires) {
    var answer = Infinity;
    const wireObj = {};

    wires.forEach((wire) => {
        const [value, linking] = wire;
        wireObj[value] = wireObj[value] ? wireObj[value] + 1 : 1;
        wireObj[linking] = wireObj[linking] ? wireObj[linking] + 1 : 1;
    });

    // wireObj에서 가장 큰 값을 찾는다. 
    let maxLinking = null;
    let maxValue = -Infinity;

    for (const key in wireObj) {
        if (wireObj[key] >= maxValue) {
            maxValue = wireObj[key];
            maxLinking = parseInt(key);
        }
    }

    for(let i = 0; i< wires.length; i++){
        const [value, linking] = wires[i];
        if(linking === maxLinking) {
            const prevIndex = i;
            const nextIndex = wires.length - i - 1;
            const diff = Math.abs(nextIndex - prevIndex);
            const min =  Math.min(diff, answer);
            answer = Math.min(diff, answer);
        } 
        else if(value === maxLinking) {
            const prevIndex = i;
            const nextIndex = wires.length - i - 1;
            const diff = Math.abs(nextIndex - prevIndex);
            const min =  Math.min(diff, answer);
        } else {
          continue;  
        }
    }

    // 이제 linking이 maxLinking인 값들을 찾아 끊어보고 앞 index, 뒤 index를 구해보자. 그래서 -를 해나가면서 가장 큰 값을 찾는다. 
    return answer;
}

function solution(n, wires) {
    let answer = Infinity;
    const wireObj = {};
    // 송전탑 개수를 구하는 함수
    const getLength = (obj, prev, visited) => {
      const nexts = obj[prev];
      for (const next of nexts) {
        if (visited.includes(next)) continue;
        visited.push(next);
        getLength(obj, next, visited);
      }
      return visited.length;
    };
    // 전력망을 나누는 함수
    const breakWire = (id1, id2) => {
      const breakedObj = Object.assign({}, wireObj);
      breakedObj[id1] = breakedObj[id1].filter((v) => v !== id2);
      breakedObj[id2] = breakedObj[id2].filter((v) => v !== id1);
      const len = getLength(breakedObj, id1, [id1]);
      return len;
    };
    // 그래프 초기화
    for (const [start, end] of wires) {
      wireObj[start] = wireObj[start] ? [...wireObj[start], end] : [end];
      wireObj[end] = wireObj[end] ? [...wireObj[end], start] : [start];
    }
    // 결과값 갱신
    for (const [id1, id2] of wires) {
      const len1 = breakWire(id1, id2);
      const len2 = n - len1;
      answer = Math.min(answer, Math.abs(len1 - len2));
    }
  
    return answer;
  }


console.log(solution(9, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]])); // 답: 3
console.log(solution(4, [[1,2],[2,3],[3,4]])); // 답: 0
console.log(solution(7, [[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]])); // 답: 1
