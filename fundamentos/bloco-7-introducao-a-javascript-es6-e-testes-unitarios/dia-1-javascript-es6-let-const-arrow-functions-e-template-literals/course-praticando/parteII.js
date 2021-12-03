/* Bloco 7.1 - JavaScript ES6 - let, const, arrow functions e template literals
Parte II - praticando course */

//1 - Crie uma função que receba um número e retorne seu fatorial.
const fatorial = num => {
  let fatorialResult = 1;
  for (let i = num; i > 0; i--) {
    fatorialResult *=  i;
  }
  return fatorialResult;
}

const fatorialPositivo = num => num > 1 ? fatorial(num) : 1; 

console.log(fatorialPositivo(7));

/* mesmo exercício de forma recursiva  */
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
//console.log(factorial(7));