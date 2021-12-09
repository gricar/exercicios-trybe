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

//console.log(fatorialPositivo(7));

/* mesmo exercício de forma recursiva  */
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
//console.log(factorial(7));


//2 - Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = phrase => {
  let palavrasArray = phrase.split(' ');
  let maxLength = 0;
  let result = '';

  for(word of palavrasArray){
    if(word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }
  return result;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));