// https://school.programmers.co.kr/learn/courses/30/lessons/150368

function solution(users, emoticons) {
    let discount = [10, 20, 30, 40];
    let len = emoticons.length;
    let res = [];
    let arr = Array(len).fill(0);

    const dfs = (depth) => {
        if (depth === len) {
            res.push(arr.slice());
            return;
        }

        for (let i = 0; i < 4; i++) {
            arr[depth] = discount[i];
            dfs(depth + 1);
            arr[depth] = 0;
        }
    };

    dfs(0); // [
            //    [10, 10], 
            //    [10, 20],
            //     ... 등등 나타냄.
            //  ]

    let pp = 0, c = 0;

    for (let i = 0; i < res.length; i++) {
        // 할인율 루프
        let sales = res[i];
        let counter = 0, money = 0;

        for (let j = 0; j < users.length; j++) {
            // 유저 루프
            let [minDiscount, maxPrice] = users[j];
            let sum = 0;
            let flag = false;

            for (let k = 0; k < len; k++) {
                // 이모티콘 루프
                if (sales[k] >= minDiscount) {
                    sum += emoticons[k] * (100 - sales[k]) / 100;
                }
                if (sum >= maxPrice) {
                    flag = true;
                    break;
                } 
            }

            if (flag) counter++;
            else money += sum;
        }

        if (counter > pp) {
            pp = counter, c = money;
        } else if (counter === pp && money > c) c = money
    }

    return [pp, c];
}

console.log(solution([
                        [40, 10000], 
                        [25, 10000]
                    ], [7000, 9000])); // [1, 5400]
console.log(solution([
                        [40, 2900], 
                        [23, 10000], 
                        [11, 5200], 
                        [5, 5900], 
                        [40, 3100],
                        [27, 9200],
                        [32, 6900]
                    ], [1300, 1500, 1600, 4900])); // [4, 13860]