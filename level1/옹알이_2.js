// https://school.programmers.co.kr/learn/courses/30/lessons/133499

function 옹알이2(babbling) {
    const wordMap = {
        'aya': 'A',
        'ye': 'B',
        'woo': 'C',
        'ma': 'D'
    };

    function convertWordToAlphabet(word) {
        return word.split(/(aya|ye|woo|ma)/).map(w => wordMap[w] || w).join('');
    }

    function isValidBabbling(babble) {
        return !/(.)\1/.test(babble) && /^[ABCD]*$/.test(babble);
    }

    const convertedBabbling = babbling.map(convertWordToAlphabet);
    const validBabbling = convertedBabbling.filter(isValidBabbling);

    return validBabbling.length;
}

console.log(옹알이2(["aya", "yee", "u", "maa"]));
console.log(옹알이2(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
  