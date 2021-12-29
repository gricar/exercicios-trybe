/* Bloco 8 - Higher Order Functions do JavaScript ES6
Exercícios Course */

//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou".
const verificacao = (myNumber, num) => myNumber === num;  // retorna true se forem iguais

const sorteio = (myNumber, callback) => {
  const num = Math.floor((Math.random() * 5) + 1);
  //console.log(num);
  return callback(myNumber, num) ? 'Parabéns você ganhou!' : 'Tente novamente';
};

console.log(sorteio(4, verificacao));
