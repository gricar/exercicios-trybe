/* Bloco 7.3 JavaScript ES6 - Primeiros passos em Jest */

/* Exercício 1 Criar os testes para a função já fornecida */
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

module.exports = sum;