// https://school.programmers.co.kr/learn/courses/30/lessons/172928
function 공원산책(park, routes) {
  const maxRow = park.length, maxCol = park[0].length;

  const dx = [0, 1, 0, -1]; // East, South, West, North
  const dy = [1, 0, -1, 0];

  let sRowIdx, sColIdx;
  for (let rowIdx = 0; rowIdx < maxRow; rowIdx++) {
      const sIndex = park[rowIdx].indexOf('S');
      if (sIndex > -1) {
          sRowIdx = rowIdx;
          sColIdx = sIndex;
          break;
      }
  }

  for (const route of routes) {
      const [op, n] = route.split(' ');
      const direction = op === 'E' ? 0 : op === 'S' ? 1 : op === 'W' ? 2 : 3;

      let isValid = true;
      for (let i = 1; i <= n; i++) {
          const newRowIdx = sRowIdx + dx[direction] * i;
          const newColIdx = sColIdx + dy[direction] * i;

          if (newRowIdx < 0 || newRowIdx >= maxRow || newColIdx < 0 || newColIdx >= maxCol || park[newRowIdx][newColIdx] === 'X') {
              isValid = false;
              break;
          }
      }

      if (isValid) {
          sRowIdx += dx[direction] * n;
          sColIdx += dy[direction] * n;
      }
  }

  return [sRowIdx, sColIdx];
}

console.log(공원산책(["SOO","OOO","OOO"], ["E 2","S 2","W 1"]));
console.log(공원산책(["SOO","OXX","OOO"], ["E 2","S 2","W 1"]));
console.log(공원산책(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"]));
