// https://www.acmicpc.net/problem/11286

function heapUp(arr) {
    return arr.sort((a, b) => {
        return Math.abs(a) === Math.abs(b) ? a - b : Math.abs(a) - Math.abs(b) ;
    });
}

function reducer(val, array) {
    switch(val) {
        case 0:
            console.log(array.length > 0 ? array.shift() : 0);
            break;
        default: 
            array.push(val);
            array = heapUp(array);
            break;
    }
}

function solution(vals) {
    let array = [];
    vals.forEach((val) => {
        reducer(val, array);
    });
};

solution([1, -1, 0, 0, 0, 1, 1, -1, -1, 2, -2, 0, 0, 0, 0, 0, 0, 0]);