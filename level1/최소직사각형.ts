// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function 최소직사각형(sizes) {
  let w = 0;
  let h = 0;

  sizes.map((size) => {
    let _w = Math.max(size[0], size[1]);
    let _h = Math.min(size[0], size[1]);
    if (_w > w) w = _w;
    if (_h > h) h = _h;
  });

  return w * h;
}

최소직사각형([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);
