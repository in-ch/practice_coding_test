// https://school.programmers.co.kr/learn/courses/30/lessons/67256

// [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
// [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"	"LLRLLRLLRL"

const keyboard = {
    "1": "/2//4//1/",
    "2": "/1//5//3//2/",
    "3": "/2//6//3/",
    "4": "/1//5//7//4/",
    "5": "/2//4//6//8//5/",
    "6": "/3//5//9//6/",
    "7": "/7//4//8//*/",
    "8": "/5//7//8//9//0/",
    "9": "/6//8//9//#/",
    "0":"/*//8//#//0/",
    "#":"/3//6//0//9//#/",
    "*": "/1//4//7//0//*/",
}
const enumObj = {
    "right": "R",
    "left": "L"
}

function pushKeypad(__number, right, left, direction) {
    const isLeft = keyboard[String(left)].includes(`/${__number}/`);
    const isRight = keyboard[String(right)].includes(`/${__number}/`);
    if(__number === 1 || __number === 4 || __number === 7) {
        return enumObj.left;
    } else if(__number === 3 || __number === 6 || __number === 9) {
        return enumObj.right;
    }
    else if(isLeft && isRight) {
        return direction;
    } else if(isLeft) {
        return enumObj.left;
    } else if(isRight) {
        return enumObj.right;
    } else {
        return "E";
    }
}

function 키패드누르기(numbers, hand) {
    let right = "#";
    let left = "*";
    let result = '';
    const direction = enumObj[hand];

    numbers.forEach(_number => {
        let move = pushKeypad(_number, right, left, direction);
        if(move === enumObj.left) {
            left = _number;
        } else if(move === enumObj.right) {
            right = _number;
        }
        result = result+move;
    });
    return result;
}

console.log(키패드누르기([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
console.log(키패드누르기([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
console.log(키패드누르기([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));

