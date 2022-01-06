/* praticando course */

// a) compare os valores para buscar o maior valor em um array.
const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

// ou
console.log(numbers.reduce((acumulador, valorArray) => (acumulador > valorArray) ? acumulador : valorArray));
