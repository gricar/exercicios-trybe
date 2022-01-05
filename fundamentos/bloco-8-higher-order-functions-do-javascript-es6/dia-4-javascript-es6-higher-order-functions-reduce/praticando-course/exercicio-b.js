/* praticando course */

// b) faça uma função que some todos os números pares do array:
const numeros = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;
const sumNumbers = (array) => array.filter(getEven).reduce(sumPair);
console.log(sumNumbers(numeros)); // 152

// ou
const sumPar = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbersAlt = (array) => array.reduce(sumPar, 0);
console.log(sumNumbersAlt(numeros)); // 152

// simplificando
console.log(numeros.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr));  
