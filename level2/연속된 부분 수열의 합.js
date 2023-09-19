// https://school.programmers.co.kr/learn/courses/30/lessons/178870

function 연속된부분수열의합(seq, k) {
    let start = 0;
    let end = 0;
    let total = seq[0];
    seq.push(0);
    let first = 1000000;
    let second = 2000000;

    while (end < seq.length - 1) {
        if (total <= k) {
            if (total === k && end - start < second - first) {
                first = start;
                second = end;
            }
            end++;
            total += seq[end];
        } else {
            start++;
            total -= seq[start - 1];
        }
    }

    return [first, second];
}

연속된부분수열의합([1, 2, 3, 4, 5], 7);
연속된부분수열의합([1, 1, 1, 2, 3, 4, 5], 5);
연속된부분수열의합([2, 2, 2, 2, 2], 6);
