//Ex.1 - Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
const n = 5;
let linha = '*';
let quadrado = '';

if (n > 1) {
  for (let i = 1; i < n; i++) {
    linha += "*";
  }
  for (let a = 0; a < linha.length; a++) {
    quadrado += linha + '\n';
  }
} else {
  console.log("O numero deve ser maior que 1")
}

console.log(quadrado);