// https://school.programmers.co.kr/learn/courses/30/lessons/12977

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number === 2) {
        return true;
    }
    if (number % 2 === 0) {
        return false;
    }
    const sqrt = Math.sqrt(number);
    for (let divisor = 3; divisor <= sqrt; divisor += 2) {
        if (number % divisor === 0) {
            return false;
        }
    }
    return true;
}

function solution(nums) {
    let first_pointer = 0;
    let second_pointer = 1;
    let third_pointer = 2;
    const numbers = [];
    let prime_count = 0;

    while (first_pointer < nums.length - 2) {
        numbers.push(nums[first_pointer] + nums[second_pointer] + nums[third_pointer]);
        if (third_pointer < nums.length - 1) {
            third_pointer++;
        } else if (second_pointer < nums.length - 2) {
            second_pointer++;
            third_pointer = second_pointer + 1;
        } else {
            first_pointer++;
            second_pointer = first_pointer + 1;
            third_pointer = second_pointer + 1;
        }
    }

    // 이렇게 해서 코드를 더 줄일 수 있다. 
    // for (let i = 0; i < nums.length - 2; i++) {
    //     for (let j = i + 1; j < nums.length - 1; j++) {
    //         for (let k = j + 1; k < nums.length; k++) {
    //             numbers.push(nums[i] + nums[j] + nums[k]);
    //         }
    //     }
    // }

    for(var num of numbers) {
        isPrime(num) && prime_count++;
    }
    return prime_count
}
  
solution([1,2,3,4]);
solution([1,2,7,6,4]);
  