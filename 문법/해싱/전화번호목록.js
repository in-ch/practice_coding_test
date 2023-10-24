// https://school.programmers.co.kr/learn/courses/30/lessons/42577
// Lv2 


////////////////////////////////////////////////////////////////////////////////////////
// 이렇게 하면 정답이 맞긴 한데.. 좀더 짧은 솔루션들이 많다. 
// 그리고 문제 잘못 본게... 나는 모든 수가 접두어가 될 수 있는 걸 가정했는데 알고보니 맨 앞에 있는 것만 비교하면 되는 거 였음 ㅋㅋ
// function makeHash(s, length) {
//     var obj = {};
//     for(let i = 0; i< s.length; i += length) {
//         var strLength = s.slice(i, i+length);
//         if(strLength.length === length) obj[s.slice(i, i+length)] = 'o';
//     }
//     return obj;
// }


// function solution(phone_books) {
//     // sort를 해서  
//     phone_books.sort();

//     var answer = true;
//     for(let i = 0; i < phone_books.length - 1; i++) {
//         if(!answer) break;
//         for(j = i; j < phone_books.length - 1; j++) {
//             let hash = makeHash(phone_books[j+1], phone_books[i].length);
//             if(hash[phone_books[i]] !== undefined) {
//                 answer = false;
//                 break;
//             }
//         }
//     }

//     return answer;
// }
////////////////////////////////////////////////////////////////////////////////////////

function solution(phoneBook) {
    const table = {};
  
    for (const number of phoneBook) {
      table[number] = true;
    };
  
    for (const number of phoneBook) {
      for (let i = 1; i < number.length; i += 1) {
        const prefix = number.slice(0, i);
        if (table[prefix]) return false;  
      };
    };
  
    return true;
  }

console.log(solution(["119", "97674223", "1195524421"]));
// console.log(solution(["123","456","789"]));
// console.log(solution(["12","123","1235","567","88"]));