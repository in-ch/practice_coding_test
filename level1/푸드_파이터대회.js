// https://school.programmers.co.kr/learn/courses/30/lessons/134240


const 푸드_파이터대회 = (food) => {
  const a_player = [];
  const b_player = [];

  const addFood  = (foodNum, count)  => {
    if(count <=0){
      return;
    }
    a_player.push(foodNum);
    b_player.unshift(foodNum);
    addFood(foodNum, count - 1)
  }

  for(let i = 1; i < food.length; i++) {
    let count = 
    addFood(i, Math.floor(food[i] / 2));
  }

  return a_player.join("") + 0 + b_player.join("");
}

console.log(푸드_파이터대회([1, 3, 4, 6]));
console.log(푸드_파이터대회([1, 7, 1, 2]));


// 다른 사람 풀이.. 
// 참고로 repeat이라는 빌트인 함수가 있었다..
// 근데 개인적으로 재귀가 좀 더 신박했던 거 같았다 ㅎㅎ

// function solution(food) {
//     let res = '';
//     for (let i = 1; i < food.length; i++) {
//         res += String(i).repeat(Math.floor(food[i]/2));
//     }

//     return res + '0' + [...res].reverse().join('');
// }