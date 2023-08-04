function 콜라문제(a, b, n) {
    let bottles = n;
    let totalCola = 0;
    
    while (bottles >= a) {
      const colaReceived = Math.floor(bottles / a) * b;
      totalCola += colaReceived;
      bottles = (bottles % a) + colaReceived;
    }
    
    return totalCola;
}

console.log(콜라문제(2, 1, 20));
// console.log(콜라문제(3, 1, 20));
