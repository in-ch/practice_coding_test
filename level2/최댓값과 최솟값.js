function 최댓값과_최솟값(s) {
    const arr = s.split(" ").sort((a,b) => parseInt(a, 10) - parseInt(b, 10));
    const newArr = [arr[0], arr.pop()];
    return newArr.join(" ");
}

// console.log(최댓값과_최솟값("1 2 3 4"));
console.log(최댓값과_최솟값("-1 -1"));
