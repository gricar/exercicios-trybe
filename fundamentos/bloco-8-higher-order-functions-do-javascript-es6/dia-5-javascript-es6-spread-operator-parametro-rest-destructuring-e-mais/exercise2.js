// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
const sum = (...elem) => elem.reduce((acc, curr) => acc + curr, 0);

console.log(sum(4, 7, 8, 9)); // 28